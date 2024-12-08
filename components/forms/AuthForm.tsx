"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
    DefaultValues,
    FieldValues,
    Path,
    SubmitHandler,
    useForm,
} from "react-hook-form";
import { ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ROUTES from "@/constants/route";

interface AuthFormProps<T extends FieldValues> {
    formType: "SIGN_IN" | "SIGN_UP";
    schema: ZodType<T>;
    defaultValues: T;
    onSubmit: (data: T) => Promise<{ success: boolean; data: T }>;
}

function AuthForm<T extends FieldValues>({
    formType,
    schema,
    defaultValues,
    onSubmit,
}: AuthFormProps<T>) {
    const form = useForm<T>({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
    });

    const handleSubmit: SubmitHandler<T> = async (data) => {
        try {
            const result = await onSubmit(data);
            if (result.success) {
                console.log("Form submitted successfully:", result.data);
            } else {
                console.error("Form submission failed:", result.data);
            }
        } catch (error) {
            console.error("Error during form submission:", error);
        }
    };

    const buttonText = formType === "SIGN_IN" ? "Accedi" : "Registrati";

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="mt-10 space-y-8"
            >
                {Object.keys(defaultValues).map((key) => (
                    <FormField
                        key={key}
                        control={form.control}
                        name={key as Path<T>}
                        render={({ field }) => (
                            <FormItem className="flex w-full flex-col gap-2.5">
                                <FormLabel className="paragraph-medium text-dark400_light700 capitalize">
                                    {key}
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        required
                                        type={
                                            key === "password"
                                                ? "password"
                                                : "text"
                                        }
                                        className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}

                <Button
                    disabled={form.formState.isSubmitting}
                    type="submit"
                    className="primary-gradient paragraph-medium min-h-12 w-full rounded-2 px-4 py-3 font-inter !text-light-900"
                >
                    {form.formState.isSubmitting
                        ? buttonText === "Accedi"
                            ? "Accesso..."
                            : "Registrazione..."
                        : buttonText}
                </Button>

                {formType === "SIGN_IN" ? (
                    <FormDescription className="paragraph-medium text-dark400_light700">
                        Non hai un account?{" "}
                        <Link
                            href={ROUTES.SIGN_UP}
                            className="paragraph-semibold primary-text-gradient cursor-pointer text-primary-500 hover:underline"
                        >
                            Registrati
                        </Link>
                    </FormDescription>
                ) : (
                    <FormDescription className="paragraph-medium text-dark400_light700">
                        Hai già un account?{" "}
                        <Link
                            href={ROUTES.SIGN_IN}
                            className="paragraph-semibold primary-text-gradient cursor-pointer text-primary-500 hover:underline"
                        >
                            Accedi
                        </Link>
                    </FormDescription>
                )}
            </form>
        </Form>
    );
}

export default AuthForm;
