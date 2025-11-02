public class Autor {
    private String nome;
    private String email;
    private String tipoAutor; // "Usuário" ou "Autor tradicional"

    // Construtor atualizado
    public Autor(String nome, String email, String tipoAutor) {
        this.nome = nome;
        this.email = email;
        this.tipoAutor = tipoAutor;
    }

    // Getters e Setters
    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public String getTipoAutor() {
        return tipoAutor;
    }

    public void setTipoAutor(String tipoAutor) {
        this.tipoAutor = tipoAutor;
    }

    @Override
    public String toString() {
        return nome + " (" + tipoAutor + ")";
    }
}
