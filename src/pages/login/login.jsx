import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../../schema/login.schema.js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button.jsx";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin.hook.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export default function Login() {
  const { mutate, isError, isSuccess } = useLogin();
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(LoginSchema),
  });

  function onSubmit(values) {
    mutate(values);
    form.reset();
  }

  useEffect(() => {
    if (isSuccess) {
      setLogin(true);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (login) {
      navigate("/tasks");
    }
  }, [login, navigate]);

  useEffect(() => {
    if (isError) {
      toast.error("Uh Ho! Your request failed", {
        description: "please Check your login details",
      });
    }
  }, [isError]);

  return (
    <section className="flex flex-row w-full max-w-screen-xl min-h-screen justify-center items-center">
      <div className=" w-4/12">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login and Create Tasks</CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="mb-4"
                          type="email"
                          placeholder="Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="mb-4"
                          type="password"
                          placeholder="Password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex flex-row justify-between">
                <p className="basis-1/2">
                  Don't have an account?{" "}
                  <Link to="signup" className="hover:text-blue-500">
                    Signup Here
                  </Link>
                </p>
                <Button type="submit">Login</Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
      <Toaster />
    </section>
  );
}
