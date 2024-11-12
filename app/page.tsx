
'use client';

import MediaConfigForm from "@/components/custom_components/MediaConfigForm";


export default function Home() {
	return (
		<main className='p-4'>
			<h1 className='text-2xl font-bold mb-4'>Media Configuration</h1>
			<MediaConfigForm />
		</main>
	);
}