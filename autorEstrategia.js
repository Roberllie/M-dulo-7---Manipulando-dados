public class EstrategiaPublicacaoLivro implements PublicavelInterface {
    @Override
    public void publicar() {
        System.out.println("📚 Publicando um livro no catálogo da biblioteca...");
    }
}
public class EstrategiaPublicacaoArtigo implements PublicavelInterface {
    @Override
    public void publicar() {
        System.out.println("📰 Publicando um artigo científico na plataforma de artigos...");
    }
}

public class Autor {
    private String nome;
    private boolean isUsuario;
    private PublicavelInterface estrategiaPublicacao;

    public Autor(String nome, boolean isUsuario) {
        this.nome = nome;
        this.isUsuario = isUsuario;
    }

    public void setEstrategiaPublicacao(PublicavelInterface estrategiaPublicacao) {
        this.estrategiaPublicacao = estrategiaPublicacao;
    }

    public void publicar() {
        if (estrategiaPublicacao != null) {
            System.out.print(nome + " está ");
            estrategiaPublicacao.publicar();
        } else {
            System.out.println("⚠️ Nenhuma estratégia de publicação definida para " + nome + ".");
        }
    }
}
public class Main {
    public static void main(String[] args) {
        Autor autor = new Autor("Roberta", true);

        // Estratégia de publicação de livro
        autor.setEstrategiaPublicacao(new EstrategiaPublicacaoLivro());
        autor.publicar();

        // Troca de estratégia para artigo
        autor.setEstrategiaPublicacao(new EstrategiaPublicacaoArtigo());
        autor.publicar();

        // Teste sem estratégia
        Autor outroAutor = new Autor("Lucas", false);
        outroAutor.publicar();
    }
}
Roberta está 📚 Publicando um livro no catálogo da biblioteca...
Roberta está 📰 Publicando um artigo científico na plataforma de artigos...
⚠️ Nenhuma estratégia de publicação definida para Lucas.
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class EstrategiaPublicacaoTest {

    @Test
    public void testPublicacaoLivro() {
        Autor autor = new Autor("Roberta", true);
        autor.setEstrategiaPublicacao(new EstrategiaPublicacaoLivro());
        assertDoesNotThrow(autor::publicar);
    }

    @Test
    public void testPublicacaoArtigo() {
        Autor autor = new Autor("Roberta", true);
        autor.setEstrategiaPublicacao(new EstrategiaPublicacaoArtigo());
        assertDoesNotThrow(autor::publicar);
    }

    @Test
    public void testSemEstrategia() {
        Autor autor = new Autor("Roberta", true);
        assertDoesNotThrow(autor::publicar);
    }
}

