import Image from "next/image";

export default function ContactButton() {
  return (
    <div className="absolute right-0">
      <Image src="/icon-contact.svg" width={16} height={16} />
      <span>Contact</span>
    </div>
  );
}
