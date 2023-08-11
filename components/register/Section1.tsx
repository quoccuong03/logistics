"use client";

import { Box, Button, List, ListItem, ListItemText } from "@mui/material";
import { TypographyHTML } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const SignUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3).max(20),
});

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
    } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });
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
                pb: { xs: 10, sm: 18.125 },
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
            }}
        >
            <TypographyHTML content={data?.content?.title} className="title" />
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input
                    className="input"
                    placeholder="email"
                    {...register("email")}
                />
                {errors.email && <span>{errors.email.message}</span>}

                <input
                    className="input"
                    placeholder="password"
                    {...register("password")}
                />

                {errors.password && <span>{errors.password.message}</span>}

                <button type="submit">submit!</button>
            </form>
            <Image
                src={require("@images/search.svg")}
                alt=""
                style={{
                    maxWidth: "100%",
                    height: "auto",
                    margin: "25px auto 52px auto",
                }}
            />
            <TypographyHTML content={data?.content?.desc} className="desc" />
            <List
                sx={{
                    mt: { xs: 2.5, sm: 5 },
                    mb: { xs: 2.5, sm: 3.125 },
                    "& .MuiListItem-root": {
                        px: 0,
                        "& .MuiListItemText-root": {
                            mt: 0,
                            pt: 0,
                            "& .MuiTypography-root": {
                                lineHeight: "normal",
                                fontSize: { xs: 15, sm: 18 },
                            },
                        },
                    },
                }}
            >
                {data?.content?.items?.map((item: any, idx: number) => (
                    <ListItem key={idx} alignItems="flex-start">
                        <Image
                            src={require("@images/check.svg")}
                            alt=""
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                                marginTop: 6,
                                marginRight: 10,
                            }}
                        />
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
            <TypographyHTML
                content={`*${data?.content?.short_desc}`}
                color={"#1EB96F"}
                fontSize={16}
                fontWeight={300}
                sx={{
                    b: {
                        fontWeight: 700,
                    },
                }}
            />
            <Button
                variant="contained"
                onClick={() => router.push("/register")}
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
                }}
            >
                {data?.btn}
            </Button>
        </Box>
    );
}
