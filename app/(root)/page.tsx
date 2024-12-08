import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";

export default function Home() {
    return (
        <main>
            <h1> Welcome to the home page</h1>;
            <form
                className="px-10 pt-[100px]"
                action={async () => {
                    "use server";
                    await signOut({ redirectTo: ROUTES.SIGN_IN });
                }}
            >
                <Button className="background-light700_dark400" type="submit">
                    Logout
                </Button>
            </form>
        </main>
    );
}
