import { Head, useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, errors, processing } = useForm({
        title: "",
        content: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/posts");
    }

    console.log(errors);

    return (
        <>
            <Head title="Create" />

            <h1 className="title">Create a new post</h1>

            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <input
                        type="text"
                        name="title"
                        id="tile"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        className={errors.title && "!ring-red-500"}
                        placeholder="Title"
                    />

                    {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title}</p>}
                    <textarea
                        rows="10"
                        value={data.content}
                        onChange={(e) => setData("content", e.target.value)}
                        className={`mt-6 ${errors.content && "!ring-red-500"}`}
                        placeholder="Content"
                    ></textarea>

                    {errors.content && <p className="error">{errors.content}</p>}

                    <button className="primary-btn mt-4" disabled={processing}>
                        Create Post
                    </button>
                </form>
            </div>
        </>
    );
}