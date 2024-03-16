<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::connection('mysql')->create('zones', function (Blueprint $table) {
            $table->id();
            $table->string('name',50);
            $table->enum('country', ['Afganistan','Albania','Alemania','Andorra','Angola','Antigua y Barbuda','Arabia Saudita / Arabia Saudí','Argelia','Argentina','Armenia','Australia','Austria','Azerbaiyán','Bahamas','Bangladés','Barbados','Baréin','Bélgica','Belice','
            Bielorrusia','Benín','Birmania / Myanmar','Bolivia','Bosnia y Herzegovina / Bosnia-Herzegovina','Botsuana','Brasil','Brunei','Bulgaria','Burkina Faso','Burundi','Bután','Cabo Verde','Camboya','Camerún','Canadá','Catar','República Centroafricana','Chad','República Checa / Chequia','Chile','China','Chipre','Colombia','Comoras','República del Congo','República Democrática del Congo','
            Corea del Norte','Corea del Sur','Costa de Marfil','Costa Rica','Croacia','Cuba','Dinamarca','Dominica','República Dominicana','Ecuador','Egipto','El Salvador','Emiratos Árabes Unidos','Eritrea','Eslovaquia','Eslovenia','España','Estados Unidos','Estonia','Etiopía','Filipinas','Finlandia','Fiyi','Francia','Gabón','Gambia','Georgia','Ghana','Granada','Grecia','Guatemala','Guinea','Guinea-Bisáu','Guinea Ecuatorial','Guyana','Haití','Honduras','Hungría','India','Indonesia','Irak','Irán','Irlanda','Islandia','Israel','
            Italia','Jamaica','Japón','Jordania','Kazajistán','Kenia','Kirguistán','Kiribati','Kuwait','Laos','Lesoto','Letonia','Líbano','
            Liberia','Libia','Liechtenstein','Lituania','Luxemburgo','Macedonia del Norte','Madagascar','Malasia','Malaui','Maldivas','Mali / Malí','Malta','Marruecos','Islas Marshall','Mauricio','Mauritania','México','Micronesia','Moldavia','Mónaco','Mongolia','
            Montenegro','Mozambique','Namibia','Nauru','Nepal','Nicaragua','Níger','Nigeria','Noruega','Nueva Zelanda / Nueva Zelandia','Omán','Países Bajos','Pakistán','Palaos','Palestina','Panamá','Papúa Nueva Guinea','Paraguay','Perú','Polonia','Portugal','
            Reino Unido','Ruanda','Rumania / Rumanía','Rusia','Islas Salomón','Samoa','San Cristóbal y Nieves','San Marino','San Vicente y las Granadinas','Santa Lucía','Santo Tomé y Príncipe','Senegal','Serbia','Seychelles','Sierra Leona','Singapur','Siria','Somalia','Sri Lanka','Suazilandia / Esuatini','Sudáfrica','Sudán','Sudán del Sur','Suecia','Suiza','Surinam','Tailandia','Tanzania','Tayikistán','Timor Oriental','Togo','Tonga','Trinidad y Tobago','Túnez','Turkmenistán','Turquía','Tuvalu','Ucrania','Uganda','
            Uruguay','Uzbekistán','Vanuatu','Ciudad del Vaticano','Venezuela','Vietnam','Yemen','Yibuti','Zambia','Zimbabue']);
            $table->float("lat");
            $table->float("lng");
            $table->float("max_soil_moisture")->nullable();
            $table->float("min_soil_moisture")->nullable();
            $table->float("max_soil_temp")->nullable();
            $table->float("min_soil_temp")->nullable();
            $table->float("min_air_temp")->nullable();
            $table->float("max_air_temp")->nullable();
            $table->unsignedBigInteger('panel_id');
            $table->foreign("panel_id")->references("id")->on("panels")->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('zones');
    }
};
