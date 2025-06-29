<script>
    import Logo from "../assets/svgIcon/logo.svelte";
</script>

<nav class="flex justify-between items-center px-4 py-2 bg-slate-900 text-white">
    <section class="flex items-center gap-2">
        <Logo/>
        <h1 class="font-bold text-xl">SSB Runner</h1>
    </section>
    <ul class="flex gap-8">
        <li class="hover:underline"><a href="/">Home</a></li>
        <li class="hover:underline"><a href="/download">Download</a></li>
        <li class="hover:underline"><a href="https://github.com/SSBContestRunner/ssb_contest_runner" target="_blank">GitHub</a></li>
    </ul>
</nav>
