'use client';
import {useState} from 'react';
import {createClient} from '@/lib/supabase';
export function ProductImageUpload({onUploaded}:{onUploaded:(url:string)=>void}){
 const [busy,setBusy]=useState(false),[message,setMessage]=useState('');
 async function upload(file?:File){if(!file)return;setMessage('');if(!['image/jpeg','image/png','image/webp','image/avif'].includes(file.type)){setMessage('اختار صورة JPG أو PNG أو WEBP أو AVIF.');return;}if(file.size>5*1024*1024){setMessage('حجم الصورة خاصو يكون أقل من 5 ميغابايت.');return;}setBusy(true);try{const db=createClient();const {data:{user}}=await db.auth.getUser();if(!user)throw new Error('سجل الدخول أولاً.');const path=user.id+'/'+crypto.randomUUID()+'.'+(file.name.split('.').pop()||'jpg');const {error}=await db.storage.from('product-images').upload(path,file,{cacheControl:'3600',upsert:false,contentType:file.type});if(error)throw error;const {data}=db.storage.from('product-images').getPublicUrl(path);onUploaded(data.publicUrl);setMessage('تم رفع الصورة.');}catch(e){setMessage(e instanceof Error?e.message:'تعذر رفع الصورة.');}finally{setBusy(false);}}
 return <div className="rounded-xl border p-3"><label className="block text-sm font-semibold">صورة المنتج (اختياري)<input type="file" accept="image/jpeg,image/png,image/webp,image/avif" disabled={busy} onChange={e=>void upload(e.target.files?.[0])} className="mt-2 block w-full text-sm"/></label>{busy&&<p className="mt-2 text-sm text-slate-500">جاري رفع الصورة...</p>}{message&&<p role="status" className="mt-2 text-sm text-orange-700">{message}</p>}</div>;
}
