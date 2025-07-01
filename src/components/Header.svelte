<script>
    import Logo from "../assets/svgIcon/logo.svelte";
    import Linkarrow from "../assets/svgIcon/linkarrow.svelte";
    import Menu from "../assets/svgIcon/menu.svelte";

    let { highlight, toPage } = $props();

    let highlightStyle = $derived((text) => {
        if (text == highlight) {
            return "font-semibold";
        }
        return "";
    });

    let menuOpen = $state(false);

    let closeAndToPage = (page) => {
        menuOpen = false;
        toPage(page);
    }
</script>

<nav class="place-items-center py-2 bg-slate-900 text-white sticky top-0">
    <div class="container flex justify-between items-center px-2 md:px-0">
        <section class="flex items-center gap-2">
            <Logo />
            <h1 class="font-bold text-xl">SSB Runner</h1>
        </section>
        <ul class="hidden md:flex gap-8">
            <li class={highlightStyle("home")}>
                <button
                    onclick={() => toPage("home")}
                    class="hover:underline cursor-pointer">Home</button
                >
            </li>
            <li class={highlightStyle("download")}>
                <button
                    onclick={() => toPage("download")}
                    class="hover:underline cursor-pointer">Download</button
                >
            </li>
            <li class="hover:underline">
                <a
                    href="https://github.com/SSBContestRunner/ssb_contest_runner"
                    target="_blank"
                    class="flex items-center"
                >
                    GitHub <Linkarrow /></a
                >
            </li>
        </ul>
        <div class="relative md:hidden flex items-center">
            <button
                class="px-1 py-0.5 rounded-md hover:bg-white/20"
                onclick={() => (menuOpen = !menuOpen)}
            >
                <Menu />
            </button>
            <ul
                class="absolute z-10 bg-slate-900 top-[100%] right-0 rounded-md px-4 py-2
                 divide-y-4 divide-transparent
                 {menuOpen ? 'block' : 'hidden'}"
            >
                <li class={highlightStyle("home")}>
                    <button
                        onclick={() => closeAndToPage("home")}
                        class="hover:underline text-xl cursor-pointer"
                        >Home</button
                    >
                </li>
                <li class={highlightStyle("download")}>
                    <button
                        onclick={() => closeAndToPage("download")}
                        class="hover:underline text-xl cursor-pointer"
                        >Download</button
                    >
                </li>
                <li class="hover:underline">
                    <a
                        href="https://github.com/SSBContestRunner/ssb_contest_runner"
                        target="_blank"
                        class="flex text-xl items-center"
                    >
                        GitHub <Linkarrow /></a
                    >
                </li>
            </ul>
        </div>
    </div>
</nav>
