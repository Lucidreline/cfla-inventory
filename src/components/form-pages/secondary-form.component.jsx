import React from "react";
import { Form, Button } from "react-bootstrap";

const SecondaryForm = ({
  attributes,
  setAttributes,
  measurements,
  setMeasurements,
  incrementFormPage,
  submitClothing,
}) => {
  const DressesQuestions = () => {
    return (
      <>
        {attributes.offShoulder ? (
          <></>
        ) : (
          <div className="shoulder-width">
            <Form.Label className="form-label">Shoulder Width</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Sub-Categories"
              onChange={(e) =>
                setMeasurements({ ...measurements, waistWidth: e.target.value })
              }
            />
          </div>
        )}

        <div className="chest-width">
          <Form.Label className="form-label">Chest Width</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Sub-Categories"
            onChange={(e) =>
              setMeasurements({ ...measurements, waistWidth: e.target.value })
            }
          />
        </div>

        {attributes.sleeveless ? (
          <></>
        ) : (
          <div className="sleeveQuestions">
            <div className="sleeve-length">
              <Form.Label className="form-label">Sleeve Length</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Sub-Categories"
                onChange={(e) =>
                  setMeasurements({
                    ...measurements,
                    waistWidth: e.target.value,
                  })
                }
              />
            </div>
            <div className="bicep-width">
              <Form.Label className="form-label">Bicep Width</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Sub-Categories"
                onChange={(e) =>
                  setMeasurements({
                    ...measurements,
                    waistWidth: e.target.value,
                  })
                }
              />
            </div>
          </div>
        )}

        <div className="garmet-length">
          <Form.Label className="form-label">Garmet Length</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Sub-Categories"
            onChange={(e) =>
              setMeasurements({ ...measurements, waistWidth: e.target.value })
            }
          />
        </div>
        <div className="bottomHemSweep">
          <Form.Label className="form-label">Bottom Hem Sweep</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Sub-Categories"
            onChange={(e) =>
              setMeasurements({ ...measurements, waistWidth: e.target.value })
            }
          />
        </div>
        <div className="bottomHemSweep">
          <Form.Label className="form-label">Hip Width</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Sub-Categories"
            onChange={(e) =>
              setMeasurements({ ...measurements, waistWidth: e.target.value })
            }
          />
        </div>
        <div className="bottomHemSweep">
          <Form.Label className="form-label">Thigh Width</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Sub-Categories"
            onChange={(e) =>
              setMeasurements({ ...measurements, waistWidth: e.target.value })
            }
          />
        </div>
        <div className="bottomHemSweep">
          <Form.Label className="form-label">Rise</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Sub-Categories"
            onChange={(e) =>
              setMeasurements({ ...measurements, waistWidth: e.target.value })
            }
          />
        </div>
      </>
    );
  };

  const SkirtsQuestion = () => {
    return (
      <>
        <div className="bottomHemSweep">
          <Form.Label className="form-label">Hip Width</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Sub-Categories"
            onChange={(e) =>
              setMeasurements({ ...measurements, waistWidth: e.target.value })
            }
          />
        </div>
        <div className="bottomHemSweep">
          <Form.Label className="form-label">Thigh Width</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Sub-Categories"
            onChange={(e) =>
              setMeasurements({ ...measurements, waistWidth: e.target.value })
            }
          />
        </div>
        <div className="bottomHemSweep">
          <Form.Label className="form-label">Rise</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Sub-Categories"
            onChange={(e) =>
              setMeasurements({ ...measurements, waistWidth: e.target.value })
            }
          />
        </div>
      </>
    );
  };

  const RompersQuestions = () => {
    return (
      <>
        {attributes.offShoulder ? (
          <></>
        ) : (
          <div className="shoulder-width">
            <Form.Label className="form-label">Shoulder Width</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Sub-Categories"
              onChange={(e) =>
                setMeasurements({ ...measurements, waistWidth: e.target.value })
              }
            />
          </div>
        )}

        <div className="chest-width">
          <Form.Label className="form-label">Chest Width</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Sub-Categories"
            onChange={(e) =>
              setMeasurements({ ...measurements, waistWidth: e.target.value })
            }
          />
        </div>

        {attributes.sleeveless ? (
          <></>
        ) : (
          <div className="sleeveQuestions">
            <div className="sleeve-length">
              <Form.Label className="form-label">Sleeve Length</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Sub-Categories"
                onChange={(e) =>
                  setMeasurements({
                    ...measurements,
                    waistWidth: e.target.value,
                  })
                }
              />
            </div>
            <div className="bicep-width">
              <Form.Label className="form-label">Bicep Width</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Sub-Categories"
                onChange={(e) =>
                  setMeasurements({
                    ...measurements,
                    waistWidth: e.target.value,
                  })
                }
              />
            </div>
          </div>
        )}

        <div className="garmet-length">
          <Form.Label className="form-label">Garmet Length</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Sub-Categories"
            onChange={(e) =>
              setMeasurements({ ...measurements, waistWidth: e.target.value })
            }
          />
        </div>
        <div className="bottomHemSweep">
          <Form.Label className="form-label">Bottom Hem Sweep</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Sub-Categories"
            onChange={(e) =>
              setMeasurements({ ...measurements, waistWidth: e.target.value })
            }
          />
        </div>
        <div className="bottomHemSweep">
          <Form.Label className="form-label">Hip Width</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Sub-Categories"
            onChange={(e) =>
              setMeasurements({ ...measurements, waistWidth: e.target.value })
            }
          />
        </div>
        <div className="bottomHemSweep">
          <Form.Label className="form-label">Thigh Width</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Sub-Categories"
            onChange={(e) =>
              setMeasurements({ ...measurements, waistWidth: e.target.value })
            }
          />
        </div>
        <div className="bottomHemSweep">
          <Form.Label className="form-label">Rise</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Sub-Categories"
            onChange={(e) =>
              setMeasurements({ ...measurements, waistWidth: e.target.value })
            }
          />
        </div>
        <div className="bottomHemSweep">
          <Form.Label className="form-label">Inseam</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Sub-Categories"
            onChange={(e) =>
              setMeasurements({ ...measurements, waistWidth: e.target.value })
            }
          />
        </div>
        <div className="bottomHemSweep">
          <Form.Label className="form-label">Outseam</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Sub-Categories"
            onChange={(e) =>
              setMeasurements({ ...measurements, waistWidth: e.target.value })
            }
          />
        </div>
      </>
    );
  };

  return (
    <div>
      <h1>{attributes.category} </h1>
      <Form>
        <div className="always-asked">
          <div className="sub-categories">
            <Form.Label className="form-label">Sub Categories</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Sub-Categories"
              value={attributes.subCategory}
              onChange={(e) =>
                setAttributes({ ...attributes, subCategory: e.target.value })
              }
            />
          </div>
          <div className="waist-width">
            <Form.Label className="form-label">Waist Width</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Waist Width"
              value={measurements.waistWidth || ""}
              onChange={(e) =>
                setMeasurements({ ...measurements, waistWidth: e.target.value })
              }
            />
          </div>
        </div>

        {attributes.category === "Tops" ? (
          <>
            {attributes.offShoulder ? (
              <></>
            ) : (
              <>
                <Form.Label className="form-label">Shoulder Width</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Waist Width"
                  value={measurements.shoulderWidth || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      shoulderWidth: e.target.value,
                    })
                  }
                />
              </>
            )}

            <Form.Label className="form-label">Chest Width</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Chest Width"
              value={measurements.chestWidth || ""}
              onChange={(e) =>
                setMeasurements({
                  ...measurements,
                  chestWidth: e.target.value,
                })
              }
            />

            {attributes.sleeveless ? (
              <></>
            ) : (
              <>
                <Form.Label className="form-label">Sleeve Length</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Sleeve Length"
                  value={measurements.sleeveLength || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      sleeveLength: e.target.value,
                    })
                  }
                />

                <Form.Label className="form-label">Bicep Width</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Bicep Width"
                  value={measurements.bicepWidth || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      bicepWidth: e.target.value,
                    })
                  }
                />
              </>
            )}

            <Form.Label className="form-label">Garmet Length</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Garmet Length"
              value={measurements.garmetLength || ""}
              onChange={(e) =>
                setMeasurements({
                  ...measurements,
                  garmetLength: e.target.value,
                })
              }
            />

            <Form.Label className="form-label">Bottom Hem Sweep</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Bottom Hem Sweep"
              value={measurements.bottomHemSweep || ""}
              onChange={(e) =>
                setMeasurements({
                  ...measurements,
                  bottomHemSweep: e.target.value,
                })
              }
            />
          </>
        ) : null}

        {attributes.category === "Pants/Shorts" ? (
          <>
            <Form.Label className="form-label">Hip Width</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Hip Width"
              value={measurements.hipWidth || ""}
              onChange={(e) =>
                setMeasurements({ ...measurements, hipWidth: e.target.value })
              }
            />

            <Form.Label className="form-label">Thigh Width</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Thigh Width"
              value={measurements.thighWidth || ""}
              onChange={(e) =>
                setMeasurements({ ...measurements, thighWidth: e.target.value })
              }
            />

            <Form.Label className="form-label">Rise</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Rise"
              value={measurements.rise || ""}
              onChange={(e) =>
                setMeasurements({ ...measurements, rise: e.target.value })
              }
            />

            <Form.Label className="form-label">Inseam</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Inseam"
              value={measurements.inseam || ""}
              onChange={(e) =>
                setMeasurements({ ...measurements, inseam: e.target.value })
              }
            />

            <Form.Label className="form-label">Outseam</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Outseam"
              value={measurements.outseam || ""}
              onChange={(e) =>
                setMeasurements({ ...measurements, outseam: e.target.value })
              }
            />
          </>
        ) : null}

        {attributes.category === "Jackets" ? (
          <>
            {attributes.offShoulder ? (
              <></>
            ) : (
              <>
                <Form.Label className="form-label">Shoulder Width</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Shoulder Width"
                  value={measurements.shoulderWidth || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      shoulderWidth: e.target.value,
                    })
                  }
                />
              </>
            )}

            <Form.Label className="form-label">Chest Width</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Chest Width"
              value={measurements.chestWidth || ""}
              onChange={(e) =>
                setMeasurements({ ...measurements, chestWidth: e.target.value })
              }
            />

            <Form.Label className="form-label">Garmet Length</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Garmet Length"
              value={measurements.garmetLength || ""}
              onChange={(e) =>
                setMeasurements({
                  ...measurements,
                  garmetLength: e.target.value,
                })
              }
            />

            <Form.Label className="form-label">Bottom Hem Sweep</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Bottom Hem Sweep"
              value={measurements.bottomHemSweep || ""}
              onChange={(e) =>
                setMeasurements({
                  ...measurements,
                  bottomHemSweep: e.target.value,
                })
              }
            />
          </>
        ) : null}

        {attributes.category === "Dresses" ? <p>ummm hi?</p> : null}

        {attributes.category === "Skirts" ? <p>ummm hi?</p> : null}

        {attributes.category === "Rompers, Jumpsuits, or Overalls" ? (
          <p>ummm hi?</p>
        ) : null}

        <div className="nav-btns">
          <Button variant="primary" onClick={() => incrementFormPage(-1)}>
            Back
          </Button>
          <Button variant="primary" onClick={() => submitClothing()}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SecondaryForm;
