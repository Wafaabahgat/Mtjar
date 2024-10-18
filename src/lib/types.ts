export interface UserData {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  phone?: string;
  country?: string;
}

export interface DataLinks {
  link?: string;
  ttl?: string;
  icon?: JSX.Element;
}

export interface StoreType {
  id?: number;
  name?: string;
  slug?: string;
  disc?: string;
  logo?: string;
  cover?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
}

export interface CategoryType {
  id?: string;
  parent_id?: string;
  name?: string;
  slug?: string;
  disc?: string;
  image?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
  parent?: CategoryType;
}

export interface Tproduct {
  id?: string;
  name?: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export interface Slice<T> {
  loading: boolean | null;
  success: boolean | null;
  msg: string;
  user?: T | object | null;
  errors: object | string;
  data: T | object | null | [];
  productInfo?: T | object | null | [];
}
export interface PaginationType {
  first_page_url?: string;
  prev_page_url?: string;
  links?:
    | undefined
    | {
        url?: string;
        active?: string;
        label?: string;
      }[];
  next_page_url?: string;
  last_page_url?: string;
}
