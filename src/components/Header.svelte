<script>
    import Logo from "../assets/svgIcon/logo.svelte";
    import Linkarrow from "../assets/svgIcon/linkarrow.svelte";

    let { highlight, toPage } = $props();

    let highlightStyle = $derived((text) => {
        if (text == highlight) {
            return "font-semibold";
        }
        return "";
    });
</script>

<nav class="place-items-center py-2 bg-slate-900 text-white sticky top-0">
    <div class="container flex justify-between items-center px-2 md:px-0">
        <section class="flex items-center gap-2">
            <Logo />
            <h1 class="font-bold text-xl">SSB Runner</h1>
        </section>
        <ul class="flex gap-8">
            <li class="{highlightStyle('home')}">
                <button onclick={() => toPage("home")} class="hover:underline cursor-pointer">Home</button>
            </li>
            <li class="{highlightStyle('download')}">
                <button onclick={() => toPage("download")} class="hover:underline cursor-pointer">Download</button>
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
    </div>
</nav>
