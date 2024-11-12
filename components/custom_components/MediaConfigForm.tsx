// app/MediaConfigForm.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const schema = z.object({
	content: z.string().nonempty('Content is required'),
	videoUrl: z.string().url('Invalid URL'),
	audioUrl: z.string().url('Invalid URL'),
	imageUrl: z.string().url('Invalid URL'),
	aspectRatio: z.enum(['16:9', '9:16', '4:3', '1:1']),
});

type FormData = z.infer<typeof schema>;

export default function MediaConfigForm() {
	const form = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			content: '',
			videoUrl: '',
			audioUrl: '',
			imageUrl: '',
			aspectRatio: '16:9',
		},
	});

	const onSubmit = (data: FormData) => {
		console.log(data);
		// Handle form submission, e.g., update state or send data to an API
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
				<FormField
					control={form.control}
					name='content'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Content</FormLabel>
							<FormControl>
								<Textarea placeholder='Enter content...' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='videoUrl'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Video URL</FormLabel>
							<FormControl>
								<Input placeholder='https://example.com/video.mp4' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='audioUrl'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Audio URL</FormLabel>
							<FormControl>
								<Input placeholder='https://example.com/audio.mp3' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='imageUrl'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Image URL</FormLabel>
							<FormControl>
								<Input placeholder='https://example.com/image.jpg' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='aspectRatio'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Aspect Ratio</FormLabel>
							<FormControl>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<SelectTrigger>
										<SelectContent>
											<SelectItem value='16:9'>16:9</SelectItem>
											<SelectItem value='9:16'>9:16</SelectItem>
											<SelectItem value='4:3'>4:3</SelectItem>
											<SelectItem value='1:1'>1:1</SelectItem>
										</SelectContent>
									</SelectTrigger>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit'>Submit</Button>
			</form>
		</Form>
	);
}