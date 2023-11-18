import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function NavBar({setPage}: {setPage: (page: number) => void}) {
    return (
      <nav className="sticky top-0 z-10 p-2 flex flex-row border-b border-stone-300 shadow-sm backdrop-blur-xl bg-white/70 dark:bg-black/70">
        <div className="flex-1 flex flex-row">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => setPage(0)}>
                    <h1 className="p-2 font-bold">PictoPass</h1>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => setPage(1)}>
                    Login
                  </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => setPage(2)}>
                    Registeration
                  </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => setPage(3)}>
                    Test
                  </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    )
}