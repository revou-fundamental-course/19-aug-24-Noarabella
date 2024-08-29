document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        // Ambil nilai dari elemen form
        const name = document.getElementById('name').value.trim();
        const dob = document.getElementById('dob').value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const message = document.getElementById('message').value.trim();

        let valid = true;
        let errorMessage = '';

        // Cek apakah nama diisi
        if (!name) {
            valid = false;
            errorMessage += 'Nama harus diisi.\n';
        }

        // Cek apakah tanggal lahir diisi
        if (!dob) {
            valid = false;
            errorMessage += 'Tanggal Lahir harus diisi.\n';
        }

        // Cek apakah jenis kelamin dipilih
        if (!gender) {
            valid = false;
            errorMessage += 'Jenis Kelamin harus dipilih.\n';
        }

        // Cek apakah pesan diisi
        if (!message) {
            valid = false;
            errorMessage += 'Pesan harus diisi.\n';
        }

        // Jika ada kesalahan, tampilkan pesan kesalahan dan batalkan pengiriman form
        if (!valid) {
            alert(errorMessage);
            event.preventDefault(); // Menghentikan pengiriman form
        }
    });
});