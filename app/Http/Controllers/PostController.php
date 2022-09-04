<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{

	public function index()
	{
		// sleep(5);
		$posts = Post::all();

		return inertia('Posts/index', compact('posts'));
	}

	public function create()
	{
		return inertia('Posts/Create');
	}

	public function store(Request $request)
	{
		//add no banco
		Post::create([
			'title' => $request->title,
			'content' => $request->content
		]);

		return redirect()->route('posts.index');
	}

	public function show(Post $post)
	{
		//
	}

	public function edit($id)
	{
		$post = Post::find($id);

		return inertia('Posts/Edit', $post);
	}

	public function update($id, StorePostRequest $request)
	{
		$post = Post::findOrFail($id);

		$post->update($request->validated());

		return redirect()->route('posts.index')->with('message', 'Post editado com sucesso!');
	}

	public function destroy($id)
	{
		$post = Post::find($id);
		$post->delete();

		return redirect()->route('posts.index')->with('message', 'Post excluído com sucesso!');
	}
}
