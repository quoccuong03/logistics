"use client";

import {
    Alert,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    TextField,
} from "@mui/material";
import { TypographyHTML } from "@/components";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioCheckedIcon, RadioIcon } from "@/components/icons";
import { ChangeEvent, useState } from "react";
import { registerSeller } from "@/hooks/useSeller";
import { STATUS_FAILURE, catchError } from "@/lib/error";
import { useLocale } from "@/hooks/useLocale";

interface Props {
    data: any;
}
const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const domainRegex = new RegExp(
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
);

export default function Section1({ data }: Props) {
    const router = useRouter();
    const [checked, setChecked] = useState<boolean>(false);
    const [error, setError] = useState<any>();
    const locale = useLocale();
    const SignUpSchema = z.object({
        sellerName: z.string().min(1, data?.name?.require),
        phone: z
            .string()
            .min(1, data?.phone?.require)
            .regex(phoneRegex, data?.phone?.phoneNumber),
        email: z
            .string()
            .min(1, data?.email?.require)
            .email(data?.email?.email),
        storeName: z.string().min(1, data?.email?.require),
        address: z.string().refine((val) => {
            if (val === "" && !checked) return false;
            return true;
        }, data?.address?.require),
        instagramLink: z
            .string()
            .min(1, data?.instagram?.require)
            .regex(domainRegex, data?.instagram?.domain),
        description: z
            .string()
            .min(1, data?.desc?.require)
            .max(1000, data?.desc?.max),
    });
    // .refine((input) => {
    //     console.log("input", input);
    //     console.log("input.address", input.address === "" && !checked);

    //     if (input.address === "" && !checked) return false;

    //     return true;
    // });
    type SignUpSchemaType = z.infer<typeof SignUpSchema>;
    const MAX_LIMIT = 1000;

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch,
    } = useForm<SignUpSchemaType>({
        resolver: zodResolver(SignUpSchema),
        mode: "onChange",
    });

    const descTxt = watch("description");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked((event.target as HTMLInputElement).checked);
    };

    const onSubmit: SubmitHandler<SignUpSchemaType> = async (payload) => {
        try {
            const res: any = await registerSeller({
                ...payload,
                source: "web",
                status: "W",
            });

            if (res?.status === STATUS_FAILURE) {
                const messages: any = catchError(res, { lang: locale });
                setError(messages?.split(".,")?.join("<br />"));
                return;
            }
            router.push(`/${locale}/seller/success`);
        } catch (error) {
            console.log("error", error);
        }
    };
    return (
        <Box
            sx={{
                mx: { xs: 2.5, sm: 3.125 },
                bgcolor: "#fff",
                pt: { xs: 2.5, sm: 5.25 },
                pl: { xs: 2.5, sm: 7.5 },
                pr: { xs: 2.5, sm: 5.75 },
                pb: { xs: 4, sm: 7 },
                "& .title": {
                    fontSize: { xs: 15, sm: 22 },
                    fontWeight: 700,
                    textAlign: "center",
                    textTransform: "uppercase",
                    span: {
                        color: "#71EAB0",
                    },
                },
                "& .desc": {
                    fontSize: { xs: 15, sm: 18 },
                    fontWeight: 500,
                },
                "& .form": {
                    "&_row": {
                        mb: { xs: 1.25, sm: 2 },
                        position: "relative",
                        label: {
                            fontSize: 14,
                            fontWeight: 500,
                            color: "#000",
                            display: "block",
                            mb: 1.25,
                            "& .MuiTypography-root": {
                                fontSize: 14,
                                fontWeight: 500,
                            },
                        },
                        "& .MuiFormControl-root": {
                            borderColor: "#E1E1E1",
                            "& .MuiInputBase": {
                                "&-root": {
                                    borderRadius: 0,
                                },
                                "&-input": {
                                    py: 1.5,
                                },
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#E1E1E1",
                            },
                        },
                        "& .help-text": {
                            position: "absolute",
                            right: 5,
                            bottom: 5,
                            color: "#AFAFAF",
                            fontSize: 12,
                        },
                        "& .MuiCheckbox-root": {
                            px: 1.25,
                        },
                    },
                },
            }}
        >
            <TypographyHTML content={data?.content?.title} className="title" />
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <Box className="form_row">
                    <label>* {data?.name?.label}</label>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("sellerName")}
                        error={!!errors?.sellerName}
                        helperText={`${errors?.sellerName?.message || ""}`}
                        fullWidth
                    />
                </Box>
                <Box className="form_row">
                    <label>* {data?.phone?.label}</label>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("phone")}
                        error={!!errors?.phone}
                        helperText={`${errors?.phone?.message || ""}`}
                        fullWidth
                    />
                </Box>
                <Box className="form_row">
                    <label>* {data?.email?.label}</label>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("email")}
                        error={!!errors?.email}
                        helperText={`${errors?.email?.message || ""}`}
                        fullWidth
                    />
                </Box>
                <Box className="form_row">
                    <label>* {data?.shop_name?.label}</label>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("storeName")}
                        error={!!errors?.storeName}
                        helperText={`${errors?.storeName?.message || ""}`}
                        fullWidth
                    />
                </Box>
                <Box className="form_row">
                    <label>* {data?.address?.label}</label>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("address", { required: !checked })}
                        error={!!errors?.address}
                        helperText={`${errors?.address?.message || ""}`}
                        fullWidth
                    />
                </Box>
                <FormControlLabel
                    sx={{
                        mb: { xs: 1.25, sm: 2 },
                        mr: 0,
                        alignItems: { xs: "flex-start", sm: "center" },
                        "& .MuiTypography-root": {
                            display: "inline-flex",
                            alignItems: "center",
                            columnGap: 1,
                            flexWrap: "wrap",
                            maxWidth: { xs: 0.89, sm: 1 },
                            small: {
                                fontSize: { xs: "62%", sm: "75%" },
                            },
                        },
                    }}
                    control={
                        <Checkbox
                            icon={
                                <RadioIcon
                                    sx={{ fontSize: { xs: 14, sm: 18 } }}
                                />
                            }
                            checkedIcon={
                                <RadioCheckedIcon
                                    sx={{ fontSize: { xs: 14, sm: 18 } }}
                                />
                            }
                            checked={checked}
                            onChange={handleChange}
                        />
                    }
                    label={<TypographyHTML content={data?.noAddress} />}
                />
                <Box className="form_row">
                    <label>* {data?.instagram?.label}</label>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("instagramLink")}
                        error={!!errors?.instagramLink}
                        helperText={`${errors?.instagramLink?.message || ""}`}
                        fullWidth
                    />
                </Box>
                <Box className="form_row">
                    <label>* {data?.desc?.label}</label>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("description")}
                        error={!!errors?.description}
                        helperText={`${errors?.description?.message || ""}`}
                        multiline
                        rows={3}
                        fullWidth
                        inputProps={{ maxLength: MAX_LIMIT }}
                    />
                    <span className="help-text">{`${
                        descTxt?.length || 0
                    }/${MAX_LIMIT} ${data?.char}`}</span>
                </Box>
                {error ? (
                    <Alert severity="error">
                        <TypographyHTML content={error} />
                    </Alert>
                ) : null}
                <Button
                    variant="contained"
                    type="submit"
                    disabled={!isValid}
                    sx={{
                        width: { xs: 150, sm: 290 },
                        fontSize: { xs: 16, sm: 21 },
                        fontWeight: 500,
                        bgcolor: "#71EAB0 !important",
                        display: "flex",
                        "&.Mui-disabled": {
                            bgcolor: "rgba(0, 0, 0, 0.12) !important",
                        },
                        mx: "auto",
                        borderRadius: 0,
                        boxShadow: "none",
                        mt: { xs: 2.5, sm: 5.625 },
                        color: "#000",
                        textTransform: "none",
                    }}
                >
                    {data?.btn}
                </Button>
            </form>
        </Box>
    );
}
