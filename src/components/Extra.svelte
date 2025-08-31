<script>
    import { t } from "../lib/i18n.js";
    import ContributorSection from "./Extra/ContributorSection.svelte";
    import ListTitle from "./Extra/ListTitle.svelte";
    import SectionTitle from "./Extra/SectionTitle.svelte";
</script>

<section class="place-items-center w-full even:bg-primary-400/8">
    <div class="container flex flex-col md:flex-row gap-2">
        <img
            class="w-full p-2 md:p-4 md:w-1/2"
            src="/bg1.jpg"
            alt="real interference"
        />
        <div class="mb-4 md:mb-0 px-2 md:px-0 py-2 md:py-4 md:w-1/2">
            <h1
                class="py-4 text-2xl md:text-4xl font-semibold text-primary-400"
            >
                {t("feature1-title")}
            </h1>
            <div class="mt-0 md:mt-4">
                <span class="md:text-xl lg:leading-10"
                    >{t("feature1-subtitle")}</span
                >
            </div>
        </div>
    </div>
</section>
<section class="place-items-center w-full even:bg-primary-400/8">
    <div class="container flex flex-col md:flex-row-reverse gap-2">
        <img
            class="w-full p-2 md:p-4 md:w-1/2"
            src="/bg2.png"
            alt="global accents"
        />
        <div class="mb-4 md:mb-0 px-2 md:px-4 py-2 md:py-4 md:w-1/2">
            <h1
                class="py-4 text-2xl md:text-4xl font-semibold text-primary-400"
            >
                {t("feature2-title")}
            </h1>
            <div class="mt-0 md:mt-4">
                <span class="md:text-xl lg:leading-10"
                    >{t("feature2-subtitle")}</span
                >
            </div>
        </div>
    </div>
</section>
<section class="place-items-center w-full even:bg-primary-400/8">
    <div class="container flex flex-col md:flex-row gap-2">
        <img
            class="w-full p-2 md:p-4 md:w-1/2"
            src="/bg3.jpg"
            alt="Pileup simulation"
        />
        <div class="mb-4 md:mb-0 px-2 md:px-0 py-2 md:py-4 md:w-1/2">
            <h1
                class="py-4 text-2xl md:text-4xl font-semibold text-primary-400"
            >
                {t("feature3-title")}
            </h1>
            <div class="mt-0 md:mt-4">
                <span class="md:text-xl lg:leading-10"
                    >{t("feature3-subtitle")}</span
                >
            </div>
        </div>
    </div>
</section>
<ContributorSection>
    <SectionTitle>{t("dev_team-title")}</SectionTitle>
    <ul class="flex justify-between md:px-16">
        <li class="w-[10em]">
            <ListTitle>{t("dev_team-idea")}</ListTitle>
            <p class="font-medium">Jing Luo</p>
            <p class="font-medium">BG7TVF</p>
        </li>
        <li class="w-[10em]">
            <ListTitle>
                {t("dev_team-ta")}
            </ListTitle>
            <p class="font-medium">DongLin Li</p>
            <p class="font-medium">BI1QJQ</p>
        </li>
        <li class="w-[10em]">
            <ListTitle>
                {t("dev_team-ui")}
            </ListTitle>
            <p class="font-medium">Yangdi Yang</p>
            <p class="font-medium">BH8GLQ</p>
        </li>
    </ul>
</ContributorSection>
<ContributorSection>
    <SectionTitle>{t("test_team-title")}</SectionTitle>
    <ul class="flex justify-between md:px-16">
        <li class="w-[10em]">
            <ListTitle>
                {t("test_team-windows")}
            </ListTitle>
            <p class="font-medium">Bosen Liang</p>
            <p class="font-medium">BI3EI</p>
        </li>
        <li class="w-[10em]">
            <ListTitle>
                {t("test_team-mac")}
            </ListTitle>
            <p class="font-medium">Yankai Li</p>
            <p class="font-medium">BD4XNS</p>
        </li>
        <li class="w-[10em]">
            <ListTitle>
                {t("test_team-linux")}
            </ListTitle>
            <p class="font-medium">None</p>
            <p class="font-medium">None</p>
        </li>
    </ul>
</ContributorSection>
<ContributorSection>
    <SectionTitle>{t("sponser-title")}</SectionTitle>
    <ul class="flex md:px-16">
        <li>
            <ListTitle>
                {t("sponser-cloud")}
            </ListTitle>
            <p class="font-medium">Charley_X_</p>
            <p class="font-medium">BI3ARY</p>
        </li>
    </ul>
</ContributorSection>
