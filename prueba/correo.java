import javax.swing.JOptionPane;
public class correo {
    public static void main(String[] args) {
        String correo = JOptionPane.showInputDialog("pone un correo");

         while(!correo.contains("@")){
            correo = JOptionPane.showInputDialog("pone un correo con @");
}
        while(correo.length() >= 12){
            correo = JOptionPane.showInputDialog("pone un correo mas chico (12 caracteres)");
}      
         while (!correo.endsWith(".com")) { 
            correo = JOptionPane.showInputDialog("pone un correo con .com al final");

}          JOptionPane.showMessageDialog(null,"el correo es: " + correo);
} 
}