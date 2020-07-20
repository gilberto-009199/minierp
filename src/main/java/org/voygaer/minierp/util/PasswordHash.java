package org.voygaer.minierp.util;

import java.security.MessageDigest;


public class PasswordHash {
	
	private static MessageDigest algorithm;
	private static String salt = "minierp2020";
	
	public static String genHash( String password) {
		
		String hash = null;
		
		if(algorithm == null)algorithm = getDigest("SHA-256");
		
		try {
			
			byte messageDigestSenhaUser[] = algorithm.digest(( salt + password ).getBytes("UTF-8"));
		    // Transformando em string na base 64
		    StringBuilder hexStringSenhaUser = new StringBuilder();
		    for (byte b : messageDigestSenhaUser) {
		    	hexStringSenhaUser.append(String.format("%02X", 0xFF & b));
		    }
		    hash = hexStringSenhaUser.toString();
		      

			
		}catch (Exception e) {
			e.printStackTrace();
		}

		return hash;
	}
	// Cria a entidade que executa o algoritmo de hash
	public static MessageDigest getDigest(String algoritmo) {
		MessageDigest digest = null;
		try {
			digest = MessageDigest.getInstance(algoritmo);
		}catch (Exception e) {
			e.printStackTrace();
		}
		return digest;
	}

}
