<script>
    import { t } from "../../lib/i18n.js";
    let { toPage } = $props();
</script>

<section class="flex-1 container flex flex-col justify-center items-center">
    <h1 class="text-4xl md:text-6xl font-bold text-center pt-16 pb-4">
        {t("main-title_1")}
    </h1>
    <h1 class="text-4xl md:text-6xl font-bold text-center pt-0 pb-8">
        {t("main-title_2")}
    </h1>
    <h2 class="text-2xl md:text-3xl font-bold text-balance text-center pb-8">
        {t("main-subtitle")}
    </h2>
</section>
<section class="flex-none place-items-center w-full bg-primary-400/8">
    <div class="container flex flex-col md:flex-row md:items-center gap-2">
        <img
            class="w-full p-2 md:p-4 md:w-1/2"
            src="/screenshot.png"
            alt="screenshot"
        />
        <div class="mb-4 md:mb-0 px-2 md:px-0">
            <h1 class="text-3xl md:text-4xl lg:text-6xl font-semibold pb-4">
                {t("download_area-title")}
            </h1>
            <div class="mb-8">
                <span class="text-md md:text-2xl">{t("download_area-subtitle")}</span>
            </div>
            <button
                class="bg-primary-400 text-white px-4 py-2 rounded-md cursor-pointer
                hover:outline-2 outline-offset-1 outline-primary-400"
                onclick={() => toPage("download")}
                >{t("download_area-btn")}</button
            >
        </div>
    </div>
</section>
