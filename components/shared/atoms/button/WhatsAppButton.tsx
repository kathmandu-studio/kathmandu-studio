import { FaWhatsapp } from "react-icons/fa";
import data from "data/whatsApp.json";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${data.redirectNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 w-[65px] h-[65px] bg-[#25D366] text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
    >
      <FaWhatsapp size={35} />
    </a>
  );
}
