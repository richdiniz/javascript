import java.util.Scanner;

public class projetopessoal1 {

    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
         double somaS=0;

        System.out.print("quantidade de amigos: ");
        int qtamg_rep=sc.nextInt();

        System.out.print("valor da conta:");
        double vc=sc.nextInt();

        double[] salarios=new double[qtamg_rep];

        for (int i = 0; i <qtamg_rep ; i++) {
            System.out.print("Salário do amigo ["+i+"]: ");
            salarios[i]=sc.nextDouble();
            somaS+=salarios[i];
        }


        for (int i = 0; i <qtamg_rep; i++){
            double valorIndividual=(salarios[i]/somaS)*vc;
            System.out.println("valor do amigo ["+i+"]:"+valorIndividual);
        }
        sc.close();
    }
}