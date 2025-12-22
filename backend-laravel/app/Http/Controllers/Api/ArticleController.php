<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index(Request $request)
{
    $query = Article::query();

    if ($request->has('search')) {
        $query->where('title', 'like', '%' . $request->search . '%');
    }

    return response()->json([
        'success' => true,
        'data' => $query->latest()->paginate(10)
    ]);
}


    public function show($id)
    {
        return Article::findOrFail($id);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'source_url' => 'required|url',
            'content' => 'nullable|string',
        ]);

        return Article::create($validated);
    }


    public function update(Request $request, $id)
    {
        $article = Article::findOrFail($id);

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'source_url' => 'sometimes|url',
            'content' => 'nullable|string',
        ]);

        $article->update($validated);

        return $article;
    }


    public function destroy($id)
    {
        Article::findOrFail($id)->delete();
        return response()->json(['message' => 'Deleted']);
    }
}
