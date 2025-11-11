import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+9779707342158"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "65px",
        height: "65px",
        backgroundColor: "#25D366", // WhatsApp brand color
        color: "#ffffff",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "32px",
        zIndex: 9999,
        textDecoration: "none",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      <FaWhatsapp />
    </a>
  );
}
