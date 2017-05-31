// @flow

//
// Copyright (c) 2017 Intel Corporation. All rights reserved.
// Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

export default function(path: string): string {
  const regexp = /^[\/]?api\/[^\/]+\/(\d+)[\/]?$/;

  const results = regexp.exec(path);

  if (results == null) throw new Error(`could not extract api id from ${path}`);

  return results[1];
}
