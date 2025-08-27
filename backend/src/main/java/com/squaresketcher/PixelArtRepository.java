package com.squaresketcher;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PixelArtRepository extends MongoRepository<PixelArt, String> {
}
