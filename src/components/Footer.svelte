<script>
    import Logo from "../assets/svgIcon/logo.svelte";
    import Copyleft from "../assets/svgIcon/copyleft.svelte";
</script>

<footer class="place-items-center py-8 bg-gray-100 px-2 md:px-0">
    <div class="container flex justify-between items-center">
        <scetion class="text-gray-400">
            <h1>SSB Runner is an <span>non-profit, not-commercial, open source project.</span></h1>
            <h1>It's just because it allows more people to join the competition.</h1>
            <h1 class="flex items-center gap-1"><Copyleft />SSB Runner 2025</h1>
        </scetion>
        <Logo size="8rem" />
    </div>
</footer>