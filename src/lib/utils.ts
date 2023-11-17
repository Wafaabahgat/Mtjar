import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const uploadImg = (e) => {
  const reader = new FileReader();
  reader.onload = () => {};

  reader.readAsDataURL(e.target.files[0]);
  const img = e.target.files[0];
  console.log(e.target.files);

  return { img };
};

export const adminImgUrl = ({ img }) => {
  return `https://estore.ammarelgendy.online/storage/${img}`;
};

// https://3mmar.amadagency.net/storage/${img}
// export const adminImgUrl = ({ img }: { img: string | undefined }) => {
//   return window.location.hostname === "localhost"
//     ? `http://localhost:8000/storage/${img}`
//     : `https://3mmar.amadagency.net/api/v1/${img}`;
// };
// baseURL: "https://3mmar.amadagency.net/api/v1",
