'use client';
import {useEffect,useState} from 'react';
import {useRouter} from 'next/navigation';
import {createClient} from '@/lib/supabase';
export default function AuthCallbackPage(){const router=useRouter();const [message,setMessage]=useState('كنأكدوا الحساب ديالك...');useEffect(()=>{let alive=true;async function finish(){const {data,error}=await createClient().auth.getSession();if(!alive)return;if(error||!data.session){setMessage('الرابط غير صالح أو انتهت صلاحيته. عاود تسجيل الدخول.');return;}router.replace('/profile');router.refresh();}void finish();return()=>{alive=false};},[router]);return <div dir="rtl" className="mx-auto max-w-xl px-4 py-20 text-center"><p>{message}</p></div>;}
