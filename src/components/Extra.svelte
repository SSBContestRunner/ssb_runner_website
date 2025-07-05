<script>
    import { t } from '../lib/i18n.js';
</script>

<section class="place-items-center w-full">
    <div class="container flex flex-col md:flex-row gap-2">
        <img
            class="w-full p-2 md:p-4 md:w-2/5"
            src="/bg1.jpg"
            alt="real interference"
        />
        <div class="mb-4 md:mb-0 px-2 md:px-0 py-2 md:py-4">
            <h1 class="py-2 text-2xl font-semibold text-primary-400">
                {t("feature1-title")}
            </h1>
            <div class="mt-0 md:mt-4">
                <span>{t("feature1-subtitle")}</span>
            </div>
        </div>
    </div>
</section>
<section class="place-items-center w-full bg-primary-400/8">
    <div class="container flex flex-col md:flex-row-reverse gap-2">
        <img
            class="w-full p-2 md:p-4 md:w-2/5"
            src="/bg2.png"
            alt="global accents"
        />
        <div class="mb-4 md:mb-0 px-2 md:px-4 py-2 md:py-4 md:w-3/5">
            <h1 class="py-2 text-2xl font-semibold text-primary-400">
                {t("feature2-title")}
            </h1>
            <div class="mt-0 md:mt-4">
                <span>{t("feature2-subtitle")}</span>
            </div>
        </div>
    </div>
</section>
<section class="place-items-center w-full">
    <div class="container flex flex-col md:flex-row gap-2">
        <img
            class="w-full p-2 md:p-4 md:w-2/5"
            src="/bg3.jpg"
            alt="Pileup simulation"
        />
        <div class="mb-4 md:mb-0 px-2 md:px-0 py-2 md:py-4">
            <h1 class="py-2 text-2xl font-semibold text-primary-400">
                {t("feature3-title")}
            </h1>
            <div class="mt-0 md:mt-4">
                <span>{t("feature3-subtitle")}</span>
            </div>
        </div>
    </div>
</section>
<section class="place-items-center w-full bg-primary-400/8">
    <div class="container py-4 px-2 md:px-0">
        <h1 class="text-2xl font-semibold">{t("dev_team-title")}</h1>
        <ul class="flex justify-between md:px-16">
            <li>
                <h2 class="text-xl text-primary-400 font-semibold pt-4 pb-1">
                    {t("dev_team-idea")}
                </h2>
                <p class="font-medium">Jing Luo</p>
                <p class="font-medium">BG7TVF</p>
            </li>
            <li>
                <h2 class="text-xl text-primary-400 font-semibold pt-4 pb-1">
                    {t("dev_team-ta")}
                </h2>
                <p class="font-medium">DongLin Li</p>
                <p class="font-medium">BI1QJQ</p>
            </li>
            <li>
                <h2 class="text-xl text-primary-400 font-semibold pt-4 pb-1">
                    {t("dev_team-ui")}
                </h2>
                <p class="font-medium">Yangdi Yang</p>
                <p class="font-medium">BH8GLQ</p>
            </li>
        </ul>
    </div>
</section>
<section class="place-items-center w-full">
    <div class="container py-4 px-2 md:px-0">
        <h1 class="text-2xl font-semibold">{t("sponser-title")}</h1>
        <ul class="flex md:px-16">
            <li>
                <h2 class="text-xl text-primary-400 font-semibold pt-4 pb-1">
                    {t("sponser-cloud")}
                </h2>
                <p class="font-medium">Charley_X_</p>
                <p class="font-medium">BI3ARY</p>
            </li>
        </ul>
    </div>
</section>
