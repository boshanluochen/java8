package com.atguigu.java8_01;

@FunctionalInterface
public interface MyPredicate<T> {

	public boolean test(T t);
	
}
