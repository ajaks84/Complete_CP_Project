package com.adc.deshand.service.dto;

import org.dozer.Mapping;

public class LineDTO {
	
	@Mapping("id")
	private Integer id;
	@Mapping("name")
	private String name;
	@Mapping("productId")
	private Integer productId;
	@Mapping("speed")
	private Integer speed;
	@Mapping("unit")
	private String unit;
	@Mapping("capacity")
	private Integer capacity;
	@Mapping("buildYear")
	private Integer buildYear;
	@Mapping("factoryId")
	private Integer factoryId;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	public Integer getSpeed() {
		return speed;
	}

	public void setSpeed(Integer speed) {
		this.speed = speed;
	}

	public String getUnit() {
		return unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public Integer getCapacity() {
		return capacity;
	}

	public void setCapacity(Integer capacity) {
		this.capacity = capacity;
	}

	public Integer getBuildYear() {
		return buildYear;
	}

	public void setBuildYear(Integer buildYear) {
		this.buildYear = buildYear;
	}

	public Integer getFactoryId() {
		return factoryId;
	}

	public void setFactoryId(Integer factoryId) {
		this.factoryId = factoryId;
	}

	@Override
	public String toString() {
		return "LineDTO [id=" + id + ", name=" + name + ", productId=" + productId + ", speed=" + speed + ", unit="
				+ unit + ", capacity=" + capacity + ", buildYear=" + buildYear + ", factoryId=" + factoryId + "]";
	}

	

}
