const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

const people = [
  { id: "maria", name: "María", initial: "M", color: "linear-gradient(135deg,#f4a6c1,#b04d87)", status: "En línea", bio: "Me gusta la música, conversar y conocer personas nuevas.", messages: [
    { text: "¡Hola! 👋 Qué gusto saludarte.", mine: false, time: "Ahora" },
    { text: "¡Hola! ¿Cómo va tu día?", mine: true, time: "Ahora" },
    { text: "¡Muy bien! ¿De dónde eres?", mine: false, time: "Ahora" }
  ]},
  { id: "alex", name: "Alex", initial: "A", color: "linear-gradient(135deg,#80c9e9,#3775b6)", status: "En línea", bio: "Aficionado a los videojuegos y las películas.", messages: [
    { text: "¿Qué juegos te gustan? 🎮", mine: false, time: "Ahora" }
  ]},
  { id: "sofia", name: "Sofía", initial: "S", color: "linear-gradient(135deg,#f6c978,#d87943)", status: "Hace 5 min", bio: "Disfruto viajar, bailar y aprender idiomas.", messages: [
    { text: "¡Bienvenido a OroChat! ✨", mine: false, time: "Ahora" }
  ]}
];

const translations = {
  es: { online:"En línea", chats:"Chats", friends:"Amigos", profile:"Perfil", people:"Personas", demoNote:"Modo de demostración: estos perfiles son ficticios.", privacyBanner:"Sé amable. No compartas contraseñas ni datos bancarios.", send:"Enviar ➤", freeChat:"Mensajes gratis · Oro virtual ilimitado en esta demo", footer:"Prototipo inicial · No es todavía un servicio en línea", editYourProfile:"Edita tu perfil", yourName:"Tu nombre", aboutYou:"Sobre ti", save:"Guardar", profileLocal:"En esta versión, el perfil se guarda solo en este dispositivo.", close:"Cerrar", placeholder:"Escribe un mensaje...", empty:"Todavía no hay mensajes. ¡Saluda para comenzar!", bio:"Sobre mí", demoProfile:"Perfil de demostración", friendsTitle:"Tus amigos", friendsText:"Aquí aparecerán tus amigos cuando conectemos las cuentas reales.", profileTitle:"Tu perfil", profileText:"Personaliza tu nombre y tu descripción. En esta demo, los cambios se guardan en este dispositivo.", profileButton:"Editar perfil", noBio:"Aún no has escrito una descripción.", sent:"Mensaje enviado en esta demostración." },
  en: { online:"Online", chats:"Chats", friends:"Friends", profile:"Profile", people:"People", demoNote:"Demo mode: these profiles are fictional.", privacyBanner:"Be kind. Never share passwords or bank details.", send:"Send ➤", freeChat:"Free messages · Unlimited virtual gold in this demo", footer:"Early prototype · Not yet an online service", editYourProfile:"Edit your profile", yourName:"Your name", aboutYou:"About you", save:"Save", profileLocal:"In this version, your profile is saved only on this device.", close:"Close", placeholder:"Write a message...", empty:"No messages yet. Say hello to start!", bio:"About me", demoProfile:"Demo profile", friendsTitle:"Your friends", friendsText:"Your friends will appear here when real accounts are connected.", profileTitle:"Your profile", profileText:"Customize your name and bio. In this demo, changes are saved on this device.", profileButton:"Edit profile", noBio:"You haven't added a bio yet.", sent:"Message sent in this demo." },
  fr: { online:"En ligne", chats:"Discussions", friends:"Amis", profile:"Profil", people:"Personnes", demoNote:"Mode démo : ces profils sont fictifs.", privacyBanner:"Soyez respectueux. Ne partagez jamais vos mots de passe.", send:"Envoyer ➤", freeChat:"Messages gratuits · Or virtuel illimité dans cette démo", footer:"Prototype initial · Pas encore un service en ligne", editYourProfile:"Modifier votre profil", yourName:"Votre nom", aboutYou:"À propos", save:"Enregistrer", profileLocal:"Dans cette version, le profil est enregistré sur cet appareil.", close:"Fermer", placeholder:"Écrire un message...", empty:"Aucun message. Dites bonjour !", bio:"À propos", demoProfile:"Profil de démonstration", friendsTitle:"Vos amis", friendsText:"Vos amis apparaîtront ici lorsque les comptes réels seront connectés.", profileTitle:"Votre profil", profileText:"Personnalisez votre nom et votre description.", profileButton:"Modifier le profil", noBio:"Aucune description pour le moment.", sent:"Message envoyé dans cette démo." },
  pt: { online:"Online", chats:"Conversas", friends:"Amigos", profile:"Perfil", people:"Pessoas", demoNote:"Modo de demonstração: estes perfis são fictícios.", privacyBanner:"Seja gentil. Não compartilhe senhas ou dados bancários.", send:"Enviar ➤", freeChat:"Mensagens grátis · Ouro virtual ilimitado nesta demo", footer:"Protótipo inicial · Ainda não é um serviço online", editYourProfile:"Editar perfil", yourName:"Seu nome", aboutYou:"Sobre você", save:"Salvar", profileLocal:"Nesta versão, o perfil é salvo apenas neste dispositivo.", close:"Fechar", placeholder:"Escreva uma mensagem...", empty:"Ainda não há mensagens. Diga olá!", bio:"Sobre mim", demoProfile:"Perfil de demonstração", friendsTitle:"Seus amigos", friendsText:"Seus amigos aparecerão aqui quando as contas reais forem conectadas.", profileTitle:"Seu perfil", profileText:"Personalize seu nome e sua descrição.", profileButton:"Editar perfil", noBio:"Você ainda não escreveu uma descrição.", sent:"Mensagem enviada nesta demonstração." },
  ar: { online:"متصل", chats:"المحادثات", friends:"الأصدقاء", profile:"الملف الشخصي", people:"الأشخاص", demoNote:"وضع تجريبي: هذه الملفات الشخصية وهمية.", privacyBanner:"كن لطيفًا. لا تشارك كلمات المرور أو البيانات المصرفية.", send:"إرسال ➤", freeChat:"رسائل مجانية · ذهب افتراضي غير محدود في هذا العرض", footer:"نموذج أولي · ليس خدمة متصلة بعد", editYourProfile:"تعديل ملفك الشخصي", yourName:"اسمك", aboutYou:"نبذة عنك", save:"حفظ", profileLocal:"في هذه النسخة، يتم حفظ الملف الشخصي على هذا الجهاز فقط.", close:"إغلاق", placeholder:"اكتب رسالة...", empty:"لا توجد رسائل بعد. قل مرحبًا!", bio:"نبذة عني", demoProfile:"ملف تجريبي", friendsTitle:"أصدقاؤك", friendsText:"سيظهر أصدقاؤك هنا عند ربط الحسابات الحقيقية.", profileTitle:"ملفك الشخصي", profileText:"خصص اسمك ووصفك.", profileButton:"تعديل الملف", noBio:"لم تضف وصفًا بعد.", sent:"تم إرسال الرسالة في هذا العرض." }
};

let currentPerson = people[0];
let activeTab = "chats";
let myProfile = { name: "Tu perfil", bio: "" };
try { myProfile = { ...myProfile, ...JSON.parse(localStorage.getItem("orochat-profile") || "{}") }; } catch (_) {}

function t(key) { return (translations[$("#language").value] || translations.es)[key] || translations.es[key] || key; }
function renderContacts() {
  $("#contact-list").innerHTML = people.map(p => `
    <button class="contact ${p.id === currentPerson.id ? "selected" : ""}" data-person="${p.id}">
      <span class="avatar" style="background:${p.color}">${p.initial}</span>
      <span class="contact-copy"><strong>${escapeHtml(p.name)}</strong><span>${escapeHtml(p.messages.at(-1)?.text || "Di hola")}</span></span>
      <span class="status-dot" title="${escapeHtml(p.status)}"></span>
    </button>`).join("");
  $$(".contact").forEach(btn => btn.addEventListener("click", () => {
    currentPerson = people.find(p => p.id === btn.dataset.person);
    activeTab = "chats"; $$(".nav-tab").forEach(b => b.classList.toggle("active", b.dataset.tab === "chats"));
    renderContacts(); renderChat(); renderContentMode();
  }));
}
function renderChat() {
  $("#chat-name").textContent = currentPerson.name;
  $("#chat-avatar").textContent = currentPerson.initial;
  $("#chat-avatar").style.background = currentPerson.color;
  $("#chat-status").textContent = "● " + currentPerson.status;
  $("#messages").innerHTML = currentPerson.messages.map(m => `<div class="message-row ${m.mine ? "mine" : ""}"><div class="bubble">${escapeHtml(m.text)}</div><span class="message-time">${escapeHtml(m.time)}</span></div>`).join("");
  $("#messages").scrollTop = $("#messages").scrollHeight;
}
function renderProfile() {
  $("#my-name").textContent = myProfile.name || "Tu perfil";
  $("#my-avatar").textContent = (myProfile.name || "T").trim().charAt(0).toUpperCase();
}
function renderContentMode() {
  const isChat = activeTab === "chats";
  $("#content").style.display = isChat ? "flex" : "flex";
  $(".chat-header").style.display = isChat ? "flex" : "none";
  $(".chat-info-banner").style.display = isChat ? "block" : "none";
  $("#messages").style.display = isChat ? "flex" : "none";
  $(".composer").style.display = isChat ? "flex" : "none";
  $(".composer-foot").style.display = isChat ? "flex" : "none";
  if (isChat) return;
  if (activeTab === "friends") {
    $("#content").innerHTML = `<div class="chat-header"><div class="avatar">👥</div><div class="chat-person"><strong>${t("friendsTitle")}</strong><span class="muted">${people.length} perfiles de demostración</span></div></div><div style="padding:24px;color:var(--muted);line-height:1.7">${t("friendsText")}<div class="contact-list" style="margin-top:18px">${people.map(p=>`<div class="contact"><span class="avatar" style="background:${p.color}">${p.initial}</span><span class="contact-copy"><strong>${escapeHtml(p.name)}</strong><span>${escapeHtml(p.status)}</span></span></div>`).join("")}</div></div>`;
  } else {
    $("#content").innerHTML = `<div class="chat-header"><div class="avatar avatar-large">${escapeHtml((myProfile.name||"T").charAt(0).toUpperCase())}</div><div class="chat-person"><strong>${t("profileTitle")}</strong><span class="muted">${t("profileText")}</span></div></div><div style="padding:24px"><h2 style="margin-top:0">${escapeHtml(myProfile.name)}</h2><p style="color:var(--muted)">${escapeHtml(myProfile.bio || t("noBio"))}</p><button class="send-button" id="edit-profile-inline">${t("profileButton")}</button></div>`;
    $("#edit-profile-inline").addEventListener("click", openProfileEditor);
  }
}
function renderTranslations() {
  $$("[data-i18n]").forEach(el => { const key = el.dataset.i18n; if (t(key)) el.textContent = t(key); });
  $("#message-input").placeholder = t("placeholder");
  document.documentElement.lang = $("#language").value;
  document.documentElement.dir = $("#language").value === "ar" ? "rtl" : "ltr";
}
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c])); }

$("#message-form").addEventListener("submit", e => {
  e.preventDefault();
  const input = $("#message-input"); const text = input.value.trim();
  if (!text) return;
  currentPerson.messages.push({ text, mine: true, time: new Date().toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"}) });
  renderContacts(); renderChat(); input.value = ""; $("#char-count").textContent = "0/1000";
});
$("#message-input").addEventListener("input", e => $("#char-count").textContent = `${e.target.value.length}/1000`);
function openProfileEditor() {
  $("#profile-name").value = myProfile.name === "Tu perfil" ? "" : myProfile.name;
  $("#profile-bio").value = myProfile.bio || "";
  $("#profile-dialog").showModal();
}
$("#edit-profile").addEventListener("click", openProfileEditor);
$("#profile-form").addEventListener("submit", e => {
  if (e.submitter?.id !== "save-profile") return;
  e.preventDefault();
  myProfile = { name: $("#profile-name").value.trim() || "Tu perfil", bio: $("#profile-bio").value.trim() };
  localStorage.setItem("orochat-profile", JSON.stringify(myProfile));
  renderProfile(); $("#profile-dialog").close();
  if (activeTab === "profile") renderContentMode();
});
$("#view-profile").addEventListener("click", () => {
  $("#info-title").textContent = currentPerson.name;
  $("#info-body").innerHTML = `<p><strong>${t("demoProfile")}</strong></p><p>${t("bio")}: ${escapeHtml(currentPerson.bio)}</p><p class="muted">Este es un perfil ficticio para probar el diseño.</p>`;
  $("#info-dialog").showModal();
});
$$(".nav-tab").forEach(btn => btn.addEventListener("click", () => {
  activeTab = btn.dataset.tab;
  $$(".nav-tab").forEach(b => b.classList.toggle("active", b === btn));
  renderContentMode();
}));
$("#language").addEventListener("change", () => { renderTranslations(); renderContentMode(); });
renderProfile(); renderContacts(); renderChat(); renderTranslations();
