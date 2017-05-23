package com.adc.deshand.service;

import java.util.List;

import com.adc.deshand.persist.entity.Factory;
import com.adc.deshand.service.dto.FactoryDTO;

public interface FactoryService extends GenericService<Factory, FactoryDTO, Integer> {

	public List<FactoryDTO> findByCountry(Integer country_id);

}
