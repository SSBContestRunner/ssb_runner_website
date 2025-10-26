<script>
    import Win from "../../assets/svgIcon/win.svelte";
    import Mac from "../../assets/svgIcon/mac.svelte";
    import Linux from "../../assets/svgIcon/linux.svelte";

    import DownloadBtn from "../Download/downloadBtn.svelte";

    import { t } from "../../lib/i18n.js";
</script>

<section class="container flex flex-col items-center">
    <h1 class="text-6xl font-bold text-balance text-center pt-16 pb-8">
        {t("download-title")}
    </h1>
</section>
<section class="place-items-center w-full">
    <div class="container px-2 md:px-0">
        <h2 class="text-3xl font-semibold text-primary-400 mt-8">
            {t("download-curr_ver")}
        </h2>
        <h3 class="text-xl font-semibold my-4">v0.1.0-alpha</h3>
        <div
            class="flex flex-col flex-wrap md:flex-row gap-4 justify-between mb-8"
        >
            <div
                class="grow flex justify-center items-center bg-primary-400/10 p-8 rounded-2xl gap-8"
            >
                <Win />
                <div class="flex flex-col gap-2">
                    <span class="font-semibold text-xl">For Windows</span>
                    <DownloadBtn link="/download/v0.1.0-alpha/ssb_runner_windows_x64_v0.1.0-alpha.zip">x86_64</DownloadBtn>
                    <DownloadBtn show={false}>x86</DownloadBtn>
                </div>
            </div>
            <div
                class="grow flex justify-center items-center bg-primary-400/10 p-8 rounded-2xl gap-6"
            >
                <Mac />
                <div class="flex flex-col gap-2">
                    <span class="font-semibold text-xl">For Mac</span>
                    <DownloadBtn link="/download/v0.1.0-alpha/ssb_runner-0.1.0-alpha-macos.dmg">Universal App</DownloadBtn>
                    <DownloadBtn show={false}>Apple Chip</DownloadBtn>
                </div>
            </div>
            <div
                class="grow flex justify-center items-center bg-primary-400/10 p-8 rounded-2xl gap-6"
            >
                <Linux />
                <div class="flex flex-col gap-2">
                    <span class="font-semibold text-xl">For Linux</span>
                    <DownloadBtn link="/download/v0.1.0-alpha/ssb_runner_linux_x64_v0.1.0-alpha.tar.gz">tar.gz</DownloadBtn>
                    <DownloadBtn link="/download/v0.1.0-alpha/ssb_runner-0.1.0+1000-linux.deb">deb</DownloadBtn>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="place-items-center w-full bg-primary-400/5">
    <div class="container px-2 md:px-0 py-8">
        <h2 class="text-2xl font-semibold text-primary-400">
            {t("download-prev_ver")}
        </h2>
        <h3 class="text-xl font-semibold my-4">v0.0.4</h3>
        <a class="hover:underline" href="https://github.com/SSBContestRunner/ssb_runner/releases/tag/v0.0.4">GitHub</a> 
    </div>
</section>
