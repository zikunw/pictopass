import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SymbolSignIn, SymbolLogout } from "./Symbols";
import { LockClosedIcon } from "@radix-ui/react-icons";

async function logout() {
  const jwt = window.sessionStorage.getItem("jwt");

  if (!jwt) {
    return;
  }

  await fetch("http://api.pictopass.co:3000/auth/signout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jwt,
    }),
  });
  window.sessionStorage.removeItem("jwt");
}

export function NavBar({ setPage }: { setPage: (page: number) => void }) {
  return (
    <nav className="sticky top-0 z-10 p-2 flex flex-row border-b border-stone-300 shadow-sm backdrop-blur-xl bg-white/70 dark:bg-black/70">
      <div className="flex-1 flex flex-row">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                onClick={() => setPage(0)}
              >
                <h1 className="p-2 font-bold">PictoPass</h1>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex-1" />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                onClick={() => setPage(2)}
              >
                <LockClosedIcon className="w-8 h-8" />
                Registration
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                onClick={() => setPage(1)}
              >
                <div className="w-8 h-8">
                  <SymbolSignIn />
                </div>
                LogIn
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                onClick={() => logout()}
              >
                <div className="w-8 h-8">
                  <SymbolLogout />
                </div>
                Logout
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
