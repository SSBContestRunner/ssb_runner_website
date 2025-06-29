<script>
    import Logo from "../assets/svgIcon/logo.svelte";
    import Copyleft from "../assets/svgIcon/copyleft.svelte";
</script>

<footer class="@container grid place-content-center py-8 bg-gray-100">
    <div class="flex justify-between items-center w-[90cqw]">
        <scetion class="text-gray-400">
            <h1>SSB Runner is an <span>non-profit, not-commercial, open source project.</span></h1>
            <h1>It's just because it allows more people to join the competition.</h1>
            <h1 class="flex items-center gap-1"><Copyleft />SSB Runner 2025</h1>
        </scetion>
        <Logo size="8rem" />
    </div>
</footer>