"use client";

import {
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
import { RadioIcon } from "@/components/icons";
const SignUpSchema = z.object({
    name: z.string({ required_error: "Tên không được trống" }),
    phone: z.string(),
    email: z.string().email(),
    address: z.string(),
    instagram: z.string(),
    desc: z.string().min(5).max(1000),
});
const MAX_LIMIT = 1000;
type SignUpSchemaType = z.infer<typeof SignUpSchema>;

interface Props {
    data: any;
}

export default function Section1({ data }: Props) {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });
    const descTxt = watch("desc");
    const onSubmit: SubmitHandler<SignUpSchemaType> = (data) =>
        console.log(data);
    return (
        <Box
            sx={{
                mx: { xs: 2.5, sm: 3.125 },
                bgcolor: "#fff",
                pt: { xs: 4, sm: 9.375 },
                pl: { xs: 4, sm: 7.5 },
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
                        mb: 2,
                        position: "relative",
                        label: {
                            fontSize: 14,
                            fontWeight: 500,
                            color: "#000",
                            display: "block",
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
                    },
                },
            }}
        >
            <TypographyHTML content={data?.content?.title} className="title" />
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <Box className="form_row">
                    <label>* {data?.name}</label>
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
                    <label>* {data?.phone}</label>
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
                    <label>* {data?.email}</label>
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
                    <label>* {data?.address}</label>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("address")}
                        error={!!errors?.address}
                        helperText={`${errors?.address?.message || ""}`}
                        fullWidth
                    />
                </Box>
                <Box className="form_row">
                    <label>* {data?.address}</label>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("address")}
                        error={!!errors?.address}
                        helperText={`${errors?.address?.message || ""}`}
                        fullWidth
                    />
                </Box>
                <Box className="form_row">
                    <FormControlLabel
                        control={
                            <Checkbox defaultChecked icon={<RadioIcon />} />
                        }
                        label={data?.instagram?.desc}
                    />
                </Box>
                <Box className="form_row">
                    <label>* {data?.instagram?.label}</label>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("instagram")}
                        error={!!errors?.instagram}
                        helperText={`${errors?.instagram?.message || ""}`}
                        fullWidth
                    />
                </Box>
                <Box className="form_row">
                    <label>{data?.desc}</label>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("desc")}
                        error={!!errors?.desc}
                        helperText={`${errors?.desc?.message || ""}`}
                        multiline
                        rows={3}
                        fullWidth
                        inputProps={{ maxLength: MAX_LIMIT }}
                    />
                    <span className="help-text">{`${
                        descTxt?.length || 0
                    }/${MAX_LIMIT} ${data?.char}`}</span>
                </Box>
                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        width: { xs: 150, sm: 290 },
                        fontSize: { xs: 16, sm: 21 },
                        fontWeight: 500,
                        bgcolor: "#71EAB0 !important",
                        display: "flex",
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
