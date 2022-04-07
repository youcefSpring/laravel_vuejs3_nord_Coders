<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $cast= [ 'is_favourite' => 'boolean'];

    protected $fillable=['name','tel','is_favorite'];
}
