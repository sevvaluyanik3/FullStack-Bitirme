// Değişkenlerin tanımlanması
var kilo, boy, hesap, vki, hata ;

function calculate() {
	kilo = document.getElementById("kilo").value;
	boy = document.getElementById("boy").value;
	hata = "Lütfen kilonuzu ve boyunuzu giriniz!";
	// Boy'un metre cinsine çevrilmesi
	boy /= 100;
	boy *= boy;
	// Vücut Kitle İndeksi (VKİ) hesaplanması
	vki = kilo/boy;
	vki = vki.toFixed(1);

	if (vki <= 18.4) {
		hesap = "VKİ: " + vki + "->ZAYIF";
	} else if (vki >= 18.5 && vki <= 24.9) {
		hesap = "VKİ: " + vki + "->NORMAL";
	} else if (vki >= 25 && vki <= 29.9) {
		hesap = "VKİ: " + vki + "->FAZLA KİLOLU";
	} else if (vki >= 30 && vki <= 34.9) {
		hesap = "VKİ: " + vki + "->1.DERECE OBEZİTE";
	} else if (vki >= 35 && vki <= 39.9) {
		hesap = "VKİ: " + vki + "->2.DERECE OBEZİTE"; 
	} else if (vki >= 40) {
		hesap = "VKİ: " + vki + "->3.DERECE OBEZİTE";
	}
	
	// Hata durumlarının kontrolü
	if (kilo === 0 ) {
		document.getElementById("results").innerHTML = hata;
	} else if (boy === 0){
		document.getElementById("results").innerHTML = hata;
	}
	 else {

		document.getElementById("results").innerHTML = hesap;
	}
	// Kilo değerine negatif girilmesi durumunda hata mesajı
	if (kilo < 0) {
		document.getElementById("results").innerHTML = "Pozitif bir değer giriniz!";
	}
}
