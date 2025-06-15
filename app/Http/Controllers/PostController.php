<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        if ($user === null) {
            return redirect('/');
        }
        $posts = Post::latest()->where('created_by', Auth::id())->paginate(5);
        return inertia('Home', ['posts' => $posts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = Auth::user();
        if ($user === null) {
            return redirect('/');
        }
        return inertia('Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        sleep(2);

        $fields = $request->validate([
            'title'=> ['required'],
            'content' => ['required']
        ]);

        $fields['created_by'] = Auth::id();
        Post::create($fields);

        return redirect('/home');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        $user = Auth::user();
        if ($user === null) {
            return redirect('/');
        }
        return inertia('Show', ['post' => $post]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        $user = Auth::user();
        if ($user === null) {
            return redirect('/');
        }
        return inertia("Edit", ['post' => $post]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        sleep(1);
        
        $fields = $request->validate([
            'title'=> ['required'],
            'content' => ['required']
        ]);

        $post->update($fields);

        return redirect('/home')->with(
            'success',
            'The post was updated successfully.'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();

        return redirect('/home')->with(
            'message',
            'The post was deleted!'
        );
    }
}