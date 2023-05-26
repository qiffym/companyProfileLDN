<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Admin LDN',
            'email' => 'admin@ldn.com',
            'password' => bcrypt('123123123'),
        ]);

        \App\Models\Career::create(
            ['position_name' => 'Staff IT', 'department' => 'IT'],
            ['position_name' => 'Staff Teknik Sipil', 'department' => 'Kontruksi'],
            ['position_name' => 'Staff Arsitek', 'department' => 'Kontruksi'],
            ['position_name' => 'Staff Legal', 'department' => 'Umum'],
        );

        \App\Models\NewsCategory::create(
            ['name' => 'Umum', 'slug' => 'umum'],
        );
    }
}
