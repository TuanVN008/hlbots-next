import Link from "next/link";
import { isLocale, type Locale } from "@/lib/locales";
import { getDictionary } from "@/lib/i18n";
import ClientCTA from '@/components/ui/ClientCTA';

// ==== Types ====
type Detail = {
  title: string;
  subtitle: string;
  videoUrl: string;
  features: string[];
  usage: string[];
  price?: { value: string; period?: string; note?: string };
  ctaText: string;
  shopQuery?: string;
  downloadUrl?: string; // <-- thêm để khớp với JSX bên dưới
};

// ==== Static params để build 3 slug ====
export async function generateStaticParams() {
  const slugs = ["rok-mobile", "rok-pc", "rok-client"];
  const locales = ["vi", "en", "pt-BR"];
  return slugs.flatMap((slug) =>
    locales.map((locale) => ({ locale, slug }))
  );
}

// ==== Dữ liệu 3 sản phẩm ====
function getProductDetail(dict: any, locale: Locale, slug: string): Detail {
  // --- MOBILE ---
  if (slug === "rok-mobile") {
    // VIETNAMESE
    if (locale === "vi")
      return {
        title: "Cloud Mobile",
        subtitle:
          "Bot chạy trên máy chủ của chúng tôi, bạn chỉ việc bật/tắt bot qua discord bằng lệnh start/stop/view, không cần treo máy",
        videoUrl: "https://www.youtube.com/embed/GspsxQAkjaY",
        features: [
          "QUẢN LÝ TÀI NGUYÊN",
          "⛏️ Thu thập tài nguyên",
          "⛏️ Thu thập đá quý",
          "⛏️ Sản xuất vật liệu",
          "⛏️ Sản xuất pha lê",
          "⛏️ Thu tài nguyên trong thành phố",
          "⛏️ Dùng tăng tốc sản xuất tài nguyên",
          "",
          "CHIẾN ĐẤU & QUÂN SỰ",
          "⚔️ Đánh man rợ",
          "⚔️ Đánh cướp bóc",
          "⚔️ Mở rally đánh pháo đài",
          "⚔️ Tham gia rally",
          "⚔️ Huấn luyện lính",
          "⚔️ Chữa lính",
          "",
          "HOẠT ĐỘNG LIÊN MINH",
          "🚩 Hỗ trợ liên minh",
          "🚩 Cống hiến liên minh",
          "🚩 Nhận quà liên minh",
          "🚩 Nhận tài nguyên từ lãnh thổ liên minh",
          "",
          "NHIỆM VỤ HÀNG NGÀY",
          "🌞Cửa hàng thương nhân bí ẩn",
          "🌞Nhận quà đăng nhập",
          "🌞Nhận quà VIP hằng ngày",
          "🌞Nhận quà viễn chinh hằng ngày",
          "🌞Nhận thưởng cuộn Lucerne",
          "🌞Mở rương miễn phí tại Quán rượu",
          "🌞Mở kho báu hang động",
          "",
          "TIỆN ÍCH HỖ TRỢ",
          "🛡️Tự động dùng khiên",
          "🛡️Tự động đăng nhập lại",
          "🛡️Tự động chuyển nhân vật",
        ],
        usage: [
          "💳 Thanh toán để đăng ký sử dụng dịch vụ.",
          "📧 Gửi cho admin email và mật khẩu tài khoản game (hoặc mã đăng nhập 1 lần) để đăng nhập trên máy chủ của HLBots.",
          "🔑 Admin sẽ cấp quyền bật/tắt tính năng bot cho bạn thông qua kênh chat Discord",
          "Cú Pháp Điều Khiển Bot tại kênh chat Discord: \n-Bắt đầu chạy bot thì gửi lệnh: start \n-Tạm dừng bot thì gửi lệnh: stop \n-Xem game chạy thì gửi lệnh: view.",
        ],
        price: { value: "199.000đ", period: "/tháng", note: "Kích hoạt tức thì" },
        ctaText: "Đăng ký ngay",
        shopQuery: "/rok/mobile",
      };

    // PORTUGUESE (BR)
    if (locale === "pt-BR")
      return {
        title: "Cloud Mobile",
        subtitle:
          "O bot roda em nosso servidor; você só precisa ligar/desligar pelo Discord usando os comandos start/stop/view, sem precisar deixar o PC ligado.",
        videoUrl: "https://www.youtube.com/embed/GspsxQAkjaY",
        features: [
          "GERENCIAMENTO DE RECURSOS",
          "⛏️ Coletar recursos",
          "⛏️ Coletar gemas",
          "⛏️ Produzir materiais",
          "⛏️ Produzir cristais",
          "⛏️ Coletar recursos da cidade",
          "⛏️ Usar aceleradores na produção de recursos",
          "",
          "COMBATE & MILITAR",
          "⚔️ Atacar bárbaros",
          "⚔️ Atacar saqueadores",
          "⚔️ Iniciar rally em fortalezas",
          "⚔️ Participar de rallies",
          "⚔️ Treinar tropas",
          "⚔️ Curar tropas",
          "",
          "ATIVIDADES DA ALIANÇA",
          "🚩 Ajuda da aliança",
          "🚩 Doações para a aliança",
          "🚩 Receber presentes da aliança",
          "🚩 Receber recursos do território da aliança",
          "",
          "TAREFAS DIÁRIAS",
          "🌞 Loja do Mercador Misterioso",
          "🌞 Resgatar recompensas de login",
          "🌞 Resgatar recompensas VIP diárias",
          "🌞 Resgatar recompensas diárias de expedição",
          "🌞 Resgatar recompensas do Pergaminho de Lucerne",
          "🌞 Abrir baús gratuitos na Taverna",
          "🌞 Abrir tesouros da caverna",
          "",
          "SUPORTE DE UTILITÁRIOS",
          "🛡️ Escudo automático",
          "🛡️ Re-login automático",
          "🛡️ Troca automática de personagem",
        ],
        usage: [
          "💳 Faça o pagamento para assinar o serviço.",
          "📧 Envie ao admin o e-mail e a senha da sua conta de jogo (ou código de login único) para entrar no servidor da HLBots.",
          "🔑 O admin concederá permissão para ativar/desativar os recursos do bot através do canal do Discord.",
          "Comandos do bot no Discord: \n- Iniciar: start \n- Pausar: stop \n- Ver: view.",
        ],
        price: { value: "US$6.9", period: "/mês", note: "Ativação imediata" },
        ctaText: "Assinar agora",
        shopQuery: "/rok/mobile",
      };

    // ENGLISH (default fallback)
    return {
      title: "Cloud Mobile",
      subtitle:
        "The bot runs on our server; turn it on/off via Discord with the commands start/stop/view — no need to keep your PC on.",
      videoUrl: "https://www.youtube.com/embed/GspsxQAkjaY",
      features: [
        "RESOURCE MANAGEMENT",
        "⛏️ Gather resources",
        "⛏️ Gather gems",
        "⛏️ Produce materials",
        "⛏️ Produce crystals",
        "⛏️ Collect city resources",
        "⛏️ Use speed-ups for resource production",
        "",
        "COMBAT & MILITARY",
        "⚔️ Hunt barbarians",
        "⚔️ Attack marauders",
        "⚔️ Launch fortress rallies",
        "⚔️ Join rallies",
        "⚔️ Train troops",
        "⚔️ Heal troops",
        "",
        "ALLIANCE ACTIVITIES",
        "🚩 Alliance help",
        "🚩 Alliance donations",
        "🚩 Claim alliance gifts",
        "🚩 Claim resources from alliance territory",
        "",
        "DAILY TASKS",
        "🌞 Mysterious Merchant shop",
        "🌞 Claim login rewards",
        "🌞 Claim daily VIP rewards",
        "🌞 Claim daily expedition rewards",
        "🌞 Claim Lucerne Scroll rewards",
        "🌞 Open free tavern chests",
        "🌞 Open cave treasures",
        "",
        "UTILITY SUPPORT",
        "🛡️ Auto shield",
        "🛡️ Auto re-login",
        "🛡️ Auto character switch",
      ],
      usage: [
        "💳 Make a payment to subscribe to the service.",
        "📧 Send the admin your game account email & password (or one-time login code) to log in on HLBots’ server.",
        "🔑 The admin will grant permission to enable/disable bot features via our Discord channel.",
        "Discord bot commands: \n- Start: start \n- Pause: stop \n- View: view.",
      ],
      price: { value: "$6.9", period: "/month", note: "Instant activation" },
      ctaText: "Subscribe now",
      shopQuery: "/rok/mobile",
    };
  }
    
  // --- PC ---
  if (slug === "rok-pc") {
    if (locale === "vi")
      return {
        title: "HLBots – Gói PC (Chạy giả lập)",
        subtitle: "Dùng giả lập LDPlayer, tối ưu nhiều cửa sổ.",
        videoUrl: "https://www.youtube.com/embed/OxlQ7pDHR-c",
        features: [
          "Thu thập Gem",
          "Thu thập tài nguyên",
          "Đán man rợ",
          "Đánh cướp bóc",
          "Join rally",
          "Tạo rally",
          "Chuyển email và nhân vật trong từng email",
          "Dò sương, hang, làng bộ tộc",
          "Tạm dừng hoặc thoát game và vào lại sau 1-120 phút",
          "Luyện lính và nâng cấp lính",
          "Mua shop thần bí",
          "Mở rương hàng ngày",
          "Giúp đỡ liên minh",
          "Sản xuất vật liệu",
          "Nhận quà hàng ngày",
          "Nhận điểm vip và rương hàng ngày",
          "Nhận tài nguyên, quà và đóng góp công nghệ, giúp đỡ liên minh",
          "Nâng cấp thành phố",
          "Đăng nhập lại nếu bị mất kết nối hoặc bị đăng nhập từ 1 thiết bị khác"
        ],
        usage: [
          "Tải và cài đặt LDPlayer tại ldplayer.net",
          "Mở App Store trong LDPlayer để tải game",
          "Cài đặt bot vào PC",
          "Nhập key kích hoạt để sử dụng"
        ],
        ctaText: "Đăng ký ngay",
        shopQuery: "/rok/pc",
        downloadUrl: "https://hlbots.net/HLBots_E_Auto_Rise_Of_Kingdoms.exe"
      };
    if (locale === "en")
      return {
        title: "HLBots – PC Plan (RoK)",
        subtitle: "Use LDPlayer emulator – optimized for multi-windows.",
        videoUrl: "https://www.youtube.com/embed/OxlQ7pDHR-c",
        features: [
          "Gather gems and resources",
          "Barbarian hunting / farming",
          "Rally join / create",
          "Auto switch emails & characters",
          "Fog / cave / tribal village scouting",
          "Pause / resume 1–120 mins",
          "Train & upgrade troops",
          "Mystery shop purchase, daily chests",
          "Alliance help & tech donation",
          "City upgrade",
          "Auto relog if disconnected",
        ],
        usage: [
          "Install LDPlayer from ldplayer.net",
          "Open its app store and install the game",
          "Install the bot on PC",
          "Enter the activation key to use",
        ],
        ctaText: "Subscribe now",
        shopQuery: "/rok/pc",
        downloadUrl: "https://hlbots.net/HLBots_E_Auto_Rise_Of_Kingdoms.exe",
      };
    if (locale === "pt-BR")
      return {
        title: "HLBots – Plano PC (RoK)",
        subtitle: "Use o emulador LDPlayer – otimizado para várias janelas.",
        videoUrl: "https://www.youtube.com/embed/OxlQ7pDHR-c",
        features: [
          "Coletar gemas e recursos",
          "Caçar bárbaros / farm",
          "Entrar / criar rally",
          "Trocar e-mails e personagens automaticamente",
          "Explorar neblina, cavernas e aldeias tribais",
          "Pausar / retomar entre 1–120 minutos",
          "Treinar e aprimorar tropas",
          "Comprar no Mercado Misterioso, baús diários",
          "Ajudar a aliança e doar tecnologia",
          "Evoluir a cidade",
          "Relogar automaticamente se desconectar",
        ],
        usage: [
          "Baixe e instale o LDPlayer em ldplayer.net",
          "Abra a loja do LDPlayer e instale o jogo",
          "Instale o bot no PC",
          "Insira a chave de ativação para usar",
        ],
        ctaText: "Assinar agora",
        shopQuery: "/rok/pc",
        downloadUrl: "https://hlbots.net/HLBots_E_Auto_Rise_Of_Kingdoms.exe",
      };

    // Fallback (EN) nếu vì lý do nào đó locale khác
    return {
      title: "HLBots – PC Plan (RoK)",
      subtitle: "Use LDPlayer emulator – optimized for multi-windows.",
      videoUrl: "https://www.youtube.com/embed/OxlQ7pDHR-c",
      features: [
        "Gather gems and resources",
        "Barbarian hunting / farming",
        "Rally join / create",
        "Auto switch emails & characters",
        "Fog / cave / tribal village scouting",
        "Pause / resume 1–120 mins",
        "Train & upgrade troops",
        "Mystery shop purchase, daily chests",
        "Alliance help & tech donation",
        "City upgrade",
        "Auto relog if disconnected",
      ],
      usage: [
        "Install LDPlayer from ldplayer.net",
        "Open its app store and install the game",
        "Install the bot on PC",
        "Enter the activation key to use",
      ],
      ctaText: "Subscribe now",
      shopQuery: "/rok/pc",
      downloadUrl: "https://hlbots.net/HLBots_E_Auto_Rise_Of_Kingdoms.exe",
    };
  }

  // --- GAME CLIENT ---
  if (slug === "rok-client") {
    // VI
    if (locale === "vi") {
      return {
        title: "HLBots – Gói Game Client",
        subtitle: "Chạy trực tiếp trên bản game PC, không cần giả lập.",
        videoUrl: "https://www.youtube.com/embed/KVfQA4whET0",
        features: [
          "Chạy bot trực tiếp trên client PC",
          "Không cần giả lập",
          "Cấu hình đơn giản",
          "Tự động thu thập Gem"
        ],
        usage: [
          "Cài đặt game Rise of Kingdoms trên PC (bản client).",
          "Tải phần mềm HLBots và cài đặt.",
          "Mở HLBots, cấu hình tài khoản & tuỳ chọn.",
          "Bấm chạy để tự động hoá."
        ],
        price: { value: "Miễn phí", note: "Bản dùng thử" },
        ctaText: "Đăng ký ngay",
        shopQuery: "/rok/client",
        downloadUrl: "https://hlbots.net/HLBots_Client.zip"
      };
    }

    // PT-BR
    if (locale === "pt-BR") {
      return {
        title: "HLBots – Plano Game Client",
        subtitle: "Roda diretamente no cliente do jogo no PC, sem emulador.",
        videoUrl: "https://www.youtube.com/embed/KVfQA4whET0",
        features: [
          "Executa o bot diretamente no cliente do PC",
          "Sem necessidade de emulador",
          "Configuração simples",
          "Automação de coleta de Gemas"
        ],
        usage: [
          "Instale o jogo Rise of Kingdoms no PC (cliente).",
          "Baixe e instale o HLBots.",
          "Abra o HLBots, configure a conta e as opções.",
          "Clique para iniciar a automação."
        ],
        price: { value: "Grátis", note: "Versão de teste" },
        ctaText: "Assinar agora",
        shopQuery: "/rok/client",
        downloadUrl: "https://hlbots.net/HLBots_Client.zip"
      };
    }

    // EN (default fallback)
    return {
      title: "HLBots – Game Client Plan (RoK)",
      subtitle: "Run directly on the PC game client, no emulator required.",
      videoUrl: "https://www.youtube.com/embed/KVfQA4whET0",
      features: [
        "Run the bot directly on the PC client",
        "No emulator needed",
        "Simple setup",
        "Gather Gem"
      ],
      usage: [
        "Install the Rise of Kingdoms PC client.",
        "Download and install HLBots.",
        "Open HLBots and configure account & options.",
        "Start automation."
      ],
      price: { value: "Free", note: "Trial version" },
      ctaText: "Try for free",
      shopQuery: "/rok/client",
      downloadUrl: "https://hlbots.net/HLBots_Client.zip"
    };
  }

  // ✅ Fallback cuối hàm (tránh lỗi "lacks ending return statement")
  return {
    title: "HLBots Product",
    subtitle: "",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: [],
    usage: [],
    price: { value: "$0" },
    ctaText: "Shop",
    shopQuery: "/shop",
  };
}

// ==== Component page chi tiết ====
export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = await getDictionary(locale);
  const data = getProductDetail(dict, locale, slug);

  const shopHref = `/${locale}/shop${data.shopQuery ?? ""}`;

  return (
    <main className="relative">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-4">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          {data.title}
        </h1>
        <p className="mt-3 text-white/70 md:text-lg">{data.subtitle}</p>
      </section>

      {/* VIDEO */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="relative w-full overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/[0.02]">
          <div className="aspect-video">
            <iframe
              src={data.videoUrl}
              title="Product demo"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      </section>

      {/* FEATURES + USAGE */}
      <section className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6">
          <h2 className="text-xl font-semibold text-white">Function</h2>
          <ul className="mt-4 space-y-3">
            {data.features.map((t, i) => (
              <li key={i} className="flex gap-3 p-3 bg-white/[0.03] rounded-xl">
                <span className="text-cyan-400"></span>
                <span className="text-white/80">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6">
          <h2 className="text-xl font-semibold text-white">How to use</h2>
          <ol className="mt-4 space-y-3">
            {data.usage.map((t, i) => (
              <li key={i} className="flex gap-3 p-3 bg-white/[0.03] rounded-xl">
                <span className="text-blue-400">{i + 1}</span>
                <span className="text-white/80">{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PRICING (CTA only) */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <div className="relative rounded-2xl p-[2px]">
          {/* viền gradient động */}
          <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(var(--tw-gradient-stops))] from-cyan-400 via-blue-500 to-purple-600 animate-[spin_8s_linear_infinite] opacity-60 blur-xl" />
          <div className="relative rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6 md:p-8">
            <section className="mx-auto max-w-3xl px-6 pb-16">
            <div className="relative rounded-2xl p-[2px]">
              <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(var(--tw-gradient-stops))] from-cyan-400 via-blue-500 to-purple-600 animate-[spin_8s_linear_infinite] opacity-60 blur-xl" />
              <div className="relative rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6 md:p-8">
                <ClientCTA
                  locale={locale}
                  ctaText={data.ctaText}
                  shopHref={shopHref}
                  downloadUrl={data.downloadUrl}
                />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

    </main>
  );
}
