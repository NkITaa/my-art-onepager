import Acordeon from "./components/Acordeon";

function Footer({ slate = false }: { slate?: boolean }) {
  const footer = {
    products: [
      { name: "Home", url: "/my-art-onepager/" },
      { name: "About Us", url: "/my-art-onepager/about" },
      { name: "Kontakt", url: "/my-art-onepager/contact" },
      { name: "Presse", url: "/my-art-onepager/press" },
      { name: "FAQ", url: "/my-art-onepager/faq" },
    ],
    legal: [
      { name: "Impressum", url: "/my-art-onepager/imprint" },
      { name: "Datenschutz Web", url: "/my-art-onepager/privacy" },
      { name: "Datenschutz App", url: "/my-art-onepager/privacy" },
      { name: "AGB", url: "/my-art-onepager/terms" },
    ],
    contact: [
      { name: "+1012 3456 789", url: "tel:+10123456789" },
      { name: "hi@myart.de", url: "mailto:hi@myart.de" },
      { name: "Kontaktformular", url: "/my-art-onepager/contact" },
    ],
    socialMedia: [
      {
        name: "myart.original",
        url: "https://www.instagram.com/myart.original/",
      },
      { name: "my.art", url: "https://www.instagram.com/my.art/" },
      { name: "myart", url: "https://www.instagram.com/myart/" },
      { name: "MYart", url: "https://www.instagram.com/myart/" },
      { name: "+ 123 456 789", url: "tel:+123456789" },
    ],
  };

  return (
    <>
      <footer
        className={`${
          slate
            ? "bg-slate-100 dark:bg-zinc-800"
            : "bg-white dark:bg-neutral-900"
        } p-10 lg:p-20`}
      >
        <div className="flex-row flex-wrap justify:start sm:justify-center items-top flex gap-16">
          <Acordeon header="Produkte" infos={footer.products} />
          <Acordeon header="Rechtliches" infos={footer.legal} />
          <Acordeon header="Kontaktiere Uns" infos={footer.contact} />
          <Acordeon
            header="Social Media"
            externalLink
            infos={footer.socialMedia}
          />
        </div>
        <p className="text-center pt-12">
          ©{new Date().getFullYear()} MyArt. All right reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
