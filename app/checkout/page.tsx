'use client';
import {useState} from 'react';
import Link from 'next/link';
import {useCart} from '@/components/cart-provider';
import {createClient} from '@/lib/supabase';
export default function CheckoutPage(){
 const {items,subtotal,clearCart}=useCart();
 const [name,setName]=useState(''),[phone,setPhone]=useState(''),[city,setCity]=useState(''),[address,setAddress]=useState(''),[message,setMessage]=useState(''),[busy,setBusy]=useState(false);
 async function send(e:{preventDefault:()=>void}){e.preventDefault();setBusy(true);setMessage('');try{const db=createClient();const {data:{user}}=await db.auth.getUser();if(!user){setMessage('سجل الدخول أولاً.');return;}const {data,error}=await db.rpc('create_order',{p_customer_name:name,p_customer_phone:phone,p_shipping_city:city,p_shipping_address:address,p_notes:'',p_items:items.map(x=>({product_id:x.id,quantity:x.quantity}))});if(error)throw error;clearCart();setMessage('تم تسجيل '+(Array.isArray(data)?data.length:1)+' طلب بنجاح. ستجد التفاصيل في حسابك.');}catch(e){setMessage(e instanceof Error?e.message:'تعذر إرسال الطلب.');}finally{setBusy(false);}}
 return <div dir="rtl" className="mx-auto max-w-2xl px-4 py-12"><h1 className="text-3xl font-black">إتمام الطلب</h1>{items.length===0?<p className="mt-6">السلة فارغة. <Link href="/products">تصفح المنتجات</Link></p>:<><p className="mt-3">المجموع التقديري: {subtotal} درهم — الأداء عند الاستلام.</p><form onSubmit={send} className="mt-6 space-y-4 rounded-3xl border bg-white p-6">{[[name,setName,'الاسم الكامل'],[phone,setPhone,'رقم الهاتف'],[city,setCity,'المدينة'],[address,setAddress,'العنوان']].map(([v,s,l])=><label key={String(l)} className="block text-sm font-bold">{String(l)}<input required value={String(v)} onChange={e=>(s as (x:string)=>void)(e.target.value)} className="mt-2 w-full rounded-xl border p-3"/></label>)}{message&&<p role="status">{message}</p>}<button disabled={busy} className="w-full rounded-xl bg-orange-600 p-4 text-white">{busy?'جاري الإرسال':'تأكيد الطلب'}</button></form></>}</div>;
}
