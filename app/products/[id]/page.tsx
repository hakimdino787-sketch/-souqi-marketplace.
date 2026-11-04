'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect,useState } from 'react';
import { useParams } from 'next/navigation';
import { AddToCartButton } from '@/components/add-to-cart-button';
import { createClient,supabaseReady } from '@/lib/supabase';
import { toProduct } from '@/lib/marketplace';
import type { Product } from '@/lib/types';
export default function ProductDetailPage(){
 const {id}=useParams<{id:string}>();
 const [product,setProduct]=useState<Product|null>(null);
 const [loading,setLoading]=useState(true);
 useEffect(()=>{let active=true;async function load(){if(!supabaseReady){setLoading(false);return;}const {data}=await createClient().from('products').select('id,name,description,price_mad,stock,image_url,status,stores!inner(name,city,status),categories(name,slug)').eq('id',id).eq('status','active').eq('stores.status','active').maybeSingle();if(active){setProduct(data?toProduct(data as never):null);setLoading(false);}}void load();return()=>{active=false};},[id]);
 if(loading)return <p className="py-20 text-center">جاري تحميل المنتج...</p>;
 if(!product)return <div dir="rtl" className="py-20 text-center"><p>المنتج غير موجود أو غير متاح.</p><Link href="/products">العودة للمنتجات</Link></div>;
 return <div dir="rtl" className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-2"><Image unoptimized src={product.image} alt={product.name} width={900} height={700} className="h-96 w-full rounded-3xl object-cover"/><section className="rounded-3xl border bg-white p-6"><p className="text-sm text-slate-500">{product.category} · {product.store}</p><h1 className="mt-3 text-3xl font-black">{product.name}</h1><p className="mt-4 text-3xl font-black text-orange-700">{product.price.toLocaleString('ar-MA')} درهم</p><p className="mt-2 text-sm text-slate-500">المخزون: {product.stock}</p><p className="mt-6 leading-8">{product.description}</p><div className="mt-8">{product.stock>0?<AddToCartButton product={product}/>:<p className="rounded-xl bg-amber-50 p-3">نفد المخزون.</p>}</div></section></div>;
}
