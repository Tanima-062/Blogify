import { Head, useForm } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

export default function Create({ post }) {
    const route = useRoute();

    const { data, setData, put, errors, processing } = useForm({
        title: post.title,
        content: post.content,
    });

    function submit(e) {
        e.preventDefault();
        // put(`/posts/${post.id}`);
        put(route("posts.update", post));
    }

    return (
        <>
            <Head title="Edit" />

            <h1 className="title">Update your post</h1>

            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <input
                        type="text"
                        name="title"
                        id="tile"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        className={errors.title && "!ring-red-500"}
                    />

                    {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title}</p>}
                    <textarea
                        rows="10"
                        value={data.content}
                        onChange={(e) => setData("content", e.target.value)}
                        className={`mt-6 ${errors.content && "!ring-red-500"}`}
                    ></textarea>

                    {errors.content && <p className="error">{errors.content}</p>}

                    <button className="primary-btn mt-4" disabled={processing}>
                        Update Post
                    </button>
                </form>
            </div>
        </>
    );
}