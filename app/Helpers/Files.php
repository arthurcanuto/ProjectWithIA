<?php
namespace App\Helpers;

use Illuminate\Support\Facades\Storage;

class Files {

    public static function save($request, string $name, string $path, string $file = null)
    {
        if(!empty($request->hasFile($name))):
            Files::delete($file);
            $file = $request->file($name)->store($path);
        endif;
        
        return $file;
    }

    public static function delete(String $src = null)
    {
        if(!empty($src)):
            Storage::delete($src);
        endif;
    }
}
