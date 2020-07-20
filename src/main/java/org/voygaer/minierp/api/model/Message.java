package org.voygaer.minierp.api.model;

public class Message<T> {
	
	private boolean status;
	private T message;
	
	public Message(boolean status, T message) {
		this.status = status;
		this.message = message;
	}
	
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public T getMessage() {
		return message;
	}
	public void setMessage(T message) {
		this.message = message;
	}
	
	
	
}
